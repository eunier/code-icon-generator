import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import * as R from 'rxjs';
import { Repository } from 'typeorm';
import { GitHubGetGitRepoResponse } from '../../dtos/git-hub-get-git-repo.response';
import { GitRepo } from '../../entities/git-repository.entity';
import { TreeItem } from '../../entities/tree-item.entity';
import { GitHubApiService } from '../git-hub-api/git-hub-api.service';

@Injectable ()
export class TasksService {
  private readonly _logger: Logger;

  public constructor (
    @InjectRepository (GitRepo)
    private readonly _gitRepoRepository: Repository<GitRepo>,
    @InjectRepository (TreeItem)
    private readonly _treeItemRepository: Repository<TreeItem>,
    private readonly _gitHubApiService: GitHubApiService,
  ) {
    this._logger = new Logger (TasksService.name);
  }

  @Cron (CronExpression.EVERY_10_SECONDS)
  public loadData (): Promise<GitHubGetGitRepoResponse> {
    return R.firstValueFrom (
      this._gitHubApiService
        .getIcons ()
        .pipe (R.tap ((res) => this._saveGitRepo (res))),
    );
  }

  private async _saveGitRepo (
    res: GitHubGetGitRepoResponse,
  ): Promise<void> {
    const gitRepo = await this._gitRepoRepository.findOne ({
      where: { sha: res.sha, url: res.url },
      relations: { tree: true },
    });

    if (gitRepo !== null) {
      this._gitRepoRepository.save (gitRepo);
    }

    // const existing = await this._gitRepoRepository.findOne ({
    //   where: { sha: res.sha, url: res.url },
    // });

    // if (existing !== null) {
    //   return;
    // }

    // const gitRepo = new GitRepo ();
    // gitRepo.sha = res.sha;
    // gitRepo.truncated = res.truncated;
    // gitRepo.url = res.url;
    // await this._gitRepoRepository.save (gitRepo);
  }

  private async _saveTree (
    res: GitHubGetGitRepoResponse,
    gitRepo: GitRepo,
  ): Promise<void> {
    if (gitRepo.tree?.length) {
      const treeItems = this._treeItemRepository.findBy ({ gitRepo });
      1;
    } else {
      const treeItems = res.tree.map ((t) => {
        const treeItem = new TreeItem ();
        treeItem.gitRepo = gitRepo;
        treeItem.mode = t.mode;
        treeItem.path = t.path;
        treeItem.sha = t.sha;
        treeItem.size = t.size;
        treeItem.type = t.type;
        treeItem.url = t.url;
        return treeItem;
      });

      this._treeItemRepository.save (treeItems);
    }
  }
}
