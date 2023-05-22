import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Tree, Trees } from '@workspace/code-icon-generator/interfaces';
import { RxjsService } from 'app/core/services/rxjs/rxjs.service';
import { Repo } from 'app/interfaces/repo.interface';
import { Observable } from 'rxjs';

@Injectable ()
export class AppService {
  constructor (
    private readonly _http: HttpService,
    private readonly _rxjs: RxjsService,
  ) {}

  public getData (): { message: string } {
    return { message: 'Hello API' };
  }

  public getIcons (): Observable<Trees> {
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
