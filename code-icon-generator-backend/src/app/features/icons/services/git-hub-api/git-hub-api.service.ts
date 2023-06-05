import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import * as R from 'rxjs';
import { Observable } from 'rxjs';
import { GitHubGetGitRepoResponse } from '../../dtos/git-hub-get-git-repo.response';
@Injectable ()
export class GitHubApiService {
  private readonly _logger = new Logger (GitHubApiService.name);

  public constructor (private readonly _http: HttpService) {}

  public getIcons (): Observable<GitHubGetGitRepoResponse> {
    return this._http
      .get<GitHubGetGitRepoResponse> (
        'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
      )
      .pipe (R.map ((res) => res.data));
  }
}
