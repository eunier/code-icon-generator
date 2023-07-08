// import { EntityRepository } from '@mikro-orm/core';
// import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { FileDataRepository } from '../../repositories/file-data/file-data.repository';
import { TreeItemRepository } from '../../repositories/tree-item/tree-item.repository';
// import { InjectRepository } from '@nestjs/typeorm';
// import { TreeItem } from '@workspace/code-icon-generator/interfaces';
// import * as rxjs from 'rxjs';
// import { Observable } from 'rxjs';
// import { GitHubGetGitRepoResponse } from '../../dtos/git-hub-get-git-repo.response';
// import { GitRepo as GitRepoEntity } from '../../entities/git-repo.entity-mikro';

@Injectable ()
export class IconService {
  public constructor (
    private readonly _fileDataRepo: FileDataRepository,
    private readonly _treeItemRepo: TreeItemRepository,
  ) {}

  public async getIcons (): Promise<
    {
      content: string;
      path: string;
    }[]
  > {
    const res = await this._treeItemRepo.getTreeDataPathFileDataContent ();
    return res;
  }
  // public constructor (
  // @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
  // @InjectRepository (GitRepoEntity)
  // private readonly _gitRepoRepository: Repository<GitRepoEntity>,
  // @InjectRepository (TreeItemEntity)
  // private readonly _treeItemRepository: Repository<TreeItemEntity>,
  // private readonly _http: HttpService,
  // @InjectRepository (GitRepoEntity)
  // private readonly _gitRepoRepository: EntityRepository<GitRepoEntity>,
  // ) {}
  // public getIcons (): Observable<TreeItem[]> {
  //   return this._http
  //     .get<GitHubGetGitRepoResponse> (
  //       'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
  //     )
  //     .pipe (
  //       rxjs.tap (async (res) => {
  //         // const gitRepo = await this._upsertGitRepo (res.data);
  //         // this._upsertTree (res.data, gitRepo);
  //         const loadedGitRepo = await this._gitRepoRepository.findOne (
  //           {
  //             sha: res.data.sha,
  //             url: res.data.url,
  //           },
  //           { populate: ['tree'] },
  //         );
  //         console.log ('loadedGitRepo', loadedGitRepo?.id);
  //       }),
  //       rxjs.map ((res) =>
  //         res.data.tree.filter ((t) => t.path.endsWith ('.svg')),
  //       ),
  //       rxjs.switchMap ((tree) =>
  //         rxjs.zip ([
  //           this._http.get<TreeItem> (tree[0].url),
  //           this._http.get<TreeItem> (tree[1].url),
  //         ]),
  //       ),
  //       rxjs.map ((res) => res.map ((el) => el.data)),
  //     );
  // }
  // private async _upsertGitRepo (
  //   res: GitHubGetGitRepoResponse,
  // ): Promise<GitRepoEntity> {
  //   const existing = await this._gitRepoRepository.findBy ({
  //     url: res.url,
  //   });
  //   if (existing.length === 1) {
  //     return existing.at (0) as GitRepoEntity;
  //   }
  //   const gitRepo = new GitRepoEntity ();
  //   gitRepo.sha = res.sha;
  //   gitRepo.truncated = res.truncated;
  //   gitRepo.url = res.url;
  //   await this._gitRepoRepository.save (gitRepo);
  //   return gitRepo;
  // }
  // private async _upsertTree (
  //   res: GitHubGetGitRepoResponse,
  //   gitRepo: GitRepoEntity,
  // ): Promise<void> {
  //   if (gitRepo.tree?.length) {
  //     const treeItems = this._treeItemRepository.findBy ({ gitRepo });
  //     1;
  //   } else {
  //     const treeItems = res.tree.map ((t) => {
  //       const treeItem = new TreeItemEntity ();
  //       treeItem.gitRepo = gitRepo;
  //       treeItem.mode = t.mode;
  //       treeItem.path = t.path;
  //       treeItem.sha = t.sha;
  //       treeItem.size = t.size;
  //       treeItem.type = t.type;
  //       treeItem.url = t.url;
  //       return treeItem;
  //     });
  //     this._treeItemRepository.save (treeItems);
  //   }
  // }
}
