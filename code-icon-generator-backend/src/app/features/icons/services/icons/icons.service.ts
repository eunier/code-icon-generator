import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TreeItem } from '@workspace/code-icon-generator/interfaces';
import { RXJS_TOKEN, Rxjs } from '@workspace/nestjs/rxjs';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { GitHubGetGitRepoResponse } from '../../dtos/git-hub-get-git-repo.response';
import { GitRepo as GitRepoEntity } from '../../entities/git-repository.entity';
import { TreeItem as TreeItemEntity } from '../../entities/tree-item.entity';

@Injectable ()
export class IconsService {
  public constructor (
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
    @InjectRepository (GitRepoEntity)
    private readonly _gitRepoRepository: Repository<GitRepoEntity>,
    @InjectRepository (TreeItemEntity)
    private readonly _treeItemRepository: Repository<TreeItemEntity>,
    private readonly _http: HttpService,
  ) {}

  public getIcons (): Observable<TreeItem[]> {
    return this._http
      .get<GitHubGetGitRepoResponse> (
        'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
      )
      .pipe (
        this._rxjs.tap (async (res) => {
          // const gitRepo = await this._upsertGitRepo (res.data);
          // this._upsertTree (res.data, gitRepo);
        }),
        this._rxjs.map ((res) =>
          res.data.tree.filter ((t) => t.path.endsWith ('.svg')),
        ),
        this._rxjs.switchMap ((tree) =>
          this._rxjs.zip ([
            this._http.get<TreeItem> (tree[0].url),
            this._http.get<TreeItem> (tree[1].url),
          ]),
        ),
        this._rxjs.map ((res) => res.map ((el) => el.data)),
      );
  }

  private async _upsertGitRepo (
    res: GitHubGetGitRepoResponse,
  ): Promise<GitRepoEntity> {
    const existing = await this._gitRepoRepository.findBy ({
      url: res.url,
    });

    if (existing.length === 1) {
      return existing.at (0) as GitRepoEntity;
    }

    const gitRepo = new GitRepoEntity ();
    gitRepo.sha = res.sha;
    gitRepo.truncated = res.truncated;
    gitRepo.url = res.url;
    await this._gitRepoRepository.save (gitRepo);
    return gitRepo;
  }

  private async _upsertTree (
    res: GitHubGetGitRepoResponse,
    gitRepo: GitRepoEntity,
  ): Promise<void> {
    if (gitRepo.tree?.length) {
      const treeItems = this._treeItemRepository.findBy ({ gitRepo });
      1;
    } else {
      const treeItems = res.tree.map ((t) => {
        const treeItem = new TreeItemEntity ();
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
