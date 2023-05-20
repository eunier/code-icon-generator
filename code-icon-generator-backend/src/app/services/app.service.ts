import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as rxjs from "@workspace/rxjs";
import * as abc from "@workspace/rxjs/operators";
import { AxiosResponse } from 'axios';
import { firstValueFrom, map } from 'rxjs';

@Injectable ()
export class AppService {
  constructor (private readonly _http: HttpService) {}

  public getData (): { message: string } {
    return { message: 'Hello API' };
  }

  public getIcons (): Promise<AxiosResponse<unknown, unknown>> {

    return firstValueFrom (
      this._http
        .get (
          'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
        )
        .pipe (map ((res) => res.data)),
    );
  }
}
