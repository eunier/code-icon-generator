import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import {
  GitRepository,
  TreeItem,
} from '@workspace/code-icon-generator/interfaces';
import { RXJS_TOKEN, Rxjs } from '@workspace/nestjs/rxjs';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { GitRepository as GitRepositoryEntity } from '../entities/git-repository.entity';
import { GIT_REPOSITORY_REPOSITORY_TOKEN } from '../providers/git-repository.provider';

@Injectable ()
export class IconsService {
  public constructor (
    @Inject (GIT_REPOSITORY_REPOSITORY_TOKEN)
    private readonly _gitRepositoryRepository: Repository<GitRepository>,
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,

    private readonly _http: HttpService,
  ) {}

  public getIcons (): Observable<TreeItem[]> {
    return this._http
      .get<GitRepository> (
        'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
      )
      .pipe (
        this._rxjs.tap (async (res) => {
          const gitRepo = new GitRepositoryEntity ();
          gitRepo.sha = res.data.sha;
          gitRepo.truncated = res.data.truncated;
          gitRepo.url = res.data.url;
          await this._gitRepositoryRepository.save (gitRepo);
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
}
