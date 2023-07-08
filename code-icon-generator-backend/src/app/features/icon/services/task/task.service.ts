import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectDatabase } from '@workspace/nestjs-orm';
import { Database } from '../../../../../db/interfaces/database.interface';
import { TreeItemCreate } from '../../entities/tree-item.entity';
import { FileDataProgressRepository } from '../../repositories/file-data-progress/file-data-progress.repository';
import { FileDataRepository } from '../../repositories/file-data/file-data.repository';
import { GitRepoRepository } from '../../repositories/git-repo/git-repo.repository';
import { TreeItemRepository } from '../../repositories/tree-item/tree-item.repository';
import { GitHubApi } from '../git-hub-api/git-hub-api.service';

@Injectable ()
export class TaskService {
  public constructor (
    @InjectDatabase () private readonly _db: Database,
    private readonly _fileDataProgressRepo: FileDataProgressRepository,
    private readonly _fileDataRepo: FileDataRepository,
    private readonly _gitHubApi: GitHubApi,
    private readonly _gitRepoRepo: GitRepoRepository,
    private readonly _treeItemRepo: TreeItemRepository,
  ) {}

  @Cron (CronExpression.EVERY_5_MINUTES)
  public async loadFileData (): Promise<void> {
    const treeItems = await this._treeItemRepo.getWithNullFileData ({
      limit: 4,
    });

    for (const treeItem of treeItems) {
      const res = await this._gitHubApi.getFileData (treeItem.url);

      const existingFileData = await this._fileDataRepo.getExisting ({
        content: res.content,
        encoding: res.encoding,
        nodeId: res.node_id,
        sha: res.sha,
        size: res.size.toString (),
        url: res.url,
      });

      await this._db.transaction ().execute (async (trx) => {
        if (existingFileData) {
          await this._fileDataProgressRepo.updateProgress (trx);

          await this._treeItemRepo.update (
            treeItem.id,
            {
              fileDataId: existingFileData.id,
            },
            trx,
          );

          return;
        }

        const fileData = await this._fileDataRepo.create (
          {
            content: res.content,
            encoding: res.encoding,
            nodeId: res.node_id,
            sha: res.sha,
            size: res.size,
            url: res.url,
          },
          trx,
        );

        await this._treeItemRepo.update (
          treeItem.id,
          {
            fileDataId: fileData?.id,
          },
          trx,
        );

        await this._fileDataProgressRepo.updateProgress (trx);
      });
    }
  }

  @Cron (CronExpression.EVERY_HOUR)
  public async loadGitRepo (): Promise<void> {
    const res = await this._gitHubApi.getGitRepo ();
    const hasGitRepo = await this._gitRepoRepo.has ({ url: res.url });

    if (!hasGitRepo) {
      this._db.transaction ().execute (async (trx) => {
        const newGitRepo = await this._gitRepoRepo.create (
          {
            sha: res.sha,
            truncated: res.truncated,
            url: res.url,
          },
          trx,
        );

        const newTreeItems = res.tree
          .filter ((t) => t.path.endsWith ('.svg'))
          .map (
            (t): TreeItemCreate => ({
              gitRepoId: newGitRepo.id,
              mode: t.mode,
              path: t.path,
              sha: t.sha,
              size: t.size,
              type: t.type,
              url: t.url,
            }),
          );

        await this._treeItemRepo.create (newTreeItems, trx);
        await this._fileDataProgressRepo.updateProgress (trx);
      });
    }
  }
}
