import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { RxjsService } from 'app/core/services/rxjs/rxjs.service';
import { AxiosResponse } from 'axios';

@Injectable ()
export class AppService {
  constructor (
    private readonly _http: HttpService,
    private readonly _rxjs: RxjsService,
  ) {}

  public getData (): { message: string } {
    return { message: 'Hello API' };
  }

  public getIcons (): Promise<AxiosResponse<unknown, unknown>> {
    return this._rxjs.firstValueFrom (
      this._http
        .get (
          'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
        )
        .pipe (
          this._rxjs.map ((res) => res.data),
          this._rxjs.tap ((val) => {
            console.log ({ val });
          }),
        ),
    );
  }
}
