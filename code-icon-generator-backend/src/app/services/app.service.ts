import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom, map } from 'rxjs';


@Injectable ()
export class AppService {
  constructor (
    private readonly _http: HttpService,
  ) {}

  public getData (): { message: string } {
    return { message: 'Hello API' };
  }

  public getIcons (): Promise<AxiosResponse<unknown, unknown>> {
    console.log ('getIcons')
    return firstValueFrom (
      this._http
        .get (
          'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
        )
        .pipe (map ((res) => res.data)),
    );
  }
}
