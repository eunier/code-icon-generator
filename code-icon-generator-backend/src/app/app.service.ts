import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IRepo } from 'app/interfaces/repo.interface';
import { ITree } from 'app/interfaces/tree.interface';
import { Observable, map, switchMap, zip } from 'rxjs';

@Injectable ()
export class AppService {
  constructor (private readonly _http: HttpService) {}

  public getData (): { message: string } {
    return { message: 'Hello API' };
  }

  public getIcons (): Observable<ITree[]> {
    return this._http
      .get<IRepo> (
        'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
      )
      .pipe (
        map ((res) => res.data),
        switchMap ((repo) =>
          zip ([
            this._http.get<ITree> (repo.tree[0].url),
            this._http.get<ITree> (repo.tree[1].url),
          ]),
        ),
        map ((res) => res.map ((el) => el.data)),
      );
  }
}
