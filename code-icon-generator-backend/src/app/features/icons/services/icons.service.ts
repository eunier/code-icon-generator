import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  GitRepository,
  TreeItem,
} from '@workspace/code-icon-generator/interfaces';
import { RXJS_TOKEN, Rxjs } from '@workspace/nestjs/rxjs';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { GitRepo } from '../entities/git-repository.entity';

@Injectable ()
export class IconsService {
  public constructor (
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
    @InjectRepository (GitRepo)
    private readonly _gitRepositoryRepository: Repository<GitRepo>,
    private readonly _http: HttpService,
  ) {}

  public getIcons (): Observable<TreeItem[]> {
    return this._http
      .get<GitRepository> (
        'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
      )
      .pipe (
        this._rxjs.tap (async (res) =>
          this._addGitRepoIfNotExisting (res.data),
        ),
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

  private async _addGitRepoIfNotExisting (
    gitRepoRes: GitRepository,
  ): Promise<void> {
    const existing = await this._gitRepositoryRepository.findBy (
      url: gitRepoRes.url,
    });

    if (existing.length > 0) {
      return;
    }

    const gitRepo = new GitRepo ();
    gitRepo.sha = gitRepoRes.sha;
    gitRepo.truncated = gitRepoRes.truncated;
    gitRepo.url = gitRepoRes.url;
    await this._gitRepositoryRepository.save (gitRepo);
  }
}
