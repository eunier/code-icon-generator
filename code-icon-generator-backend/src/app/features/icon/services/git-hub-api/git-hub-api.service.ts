import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as R from 'rxjs';
import { GitHubGetFileResponse } from '../../dtos/git-hub-get-file-data.response';
import { GitHubGetGitRepoResponse } from '../../dtos/git-hub-get-git-repo.response';
@Injectable ()
export class GitHubApi {
  public constructor (private readonly _http: HttpService) {}

  public getFileData (url: string): Promise<GitHubGetFileResponse> {
    return R.firstValueFrom (
      this._http
        .get<GitHubGetFileResponse> (url)
        .pipe (R.map ((res) => res.data)),
    );
  }

  public getGitRepo (): Promise<GitHubGetGitRepoResponse> {
    return R.firstValueFrom (
      this._http
        .get<GitHubGetGitRepoResponse> (
          'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
        )
        .pipe (R.map ((res) => res.data)),
    );
  }
}
