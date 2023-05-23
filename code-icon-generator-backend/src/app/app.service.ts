import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Tree } from '@workspace/code-icon-generator/interfaces';
import { RXJS_TOKEN, Rxjs } from '@workspace/nestjs-rxjs';
import { Observable } from 'rxjs';
import { Repo } from './interfaces/repo.interface';

@Injectable ()
export class AppService {
  constructor (
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
    private readonly _http: HttpService,
  ) {}

  public getData (): { message: string } {
    return { message: 'Hello API' };
  }

  public getIcons (): Observable<Tree[]> {
    return this._http
      .get<Repo> (
        'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
      )
      .pipe (
        this._rxjs.map ((res) => res.data),
        this._rxjs.switchMap ((repo) =>
          this._rxjs.zip ([
            this._http.get<Tree> (repo.tree[0].url),
            this._http.get<Tree> (repo.tree[1].url),
          ]),
        ),
        this._rxjs.map ((res) => res.map ((el) => el.data)),
      );
  }
}
