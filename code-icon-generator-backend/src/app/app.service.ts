import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { RxjsService } from 'app/core/services/rxjs/rxjs.service';
import { IRepo } from 'app/interfaces/repo.interface';
import { ITree } from 'app/interfaces/tree.interface';

@Injectable ()
export class AppService {
  constructor (
    private readonly _http: HttpService,
    private readonly _rxjs: RxjsService,
  ) {}

  public getData (): { message: string } {
    return { message: 'Hello API' };
  }

  public getIcons () {
    return this._http
      .get<IRepo> (
        'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
      )
      .pipe (
        this._rxjs.map ((res) => res.data),
        this._rxjs.switchMap ((repo) =>
          this._rxjs.zip ([
            this._http.get<ITree> (repo.tree[0].url),
            this._http.get<ITree> (repo.tree[1].url),
          ]),
        ),
        this._rxjs.map ((res) => res.map (el => el.data)),
      );
  }
}
