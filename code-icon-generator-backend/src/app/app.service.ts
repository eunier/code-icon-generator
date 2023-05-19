import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable ()
export class AppService {
  constructor (private readonly _http: HttpService) {}
  getData (): { message: string } {
    return { message: 'Hello API' };
  }

  getIcons (): Promise<AxiosResponse<unknown, unknown>> {
    return firstValueFrom (
      this._http.get (
        'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/trees/main?recursive=1',
      ),
    );
  }
}
