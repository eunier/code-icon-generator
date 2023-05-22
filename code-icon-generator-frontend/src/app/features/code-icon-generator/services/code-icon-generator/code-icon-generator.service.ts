import { Inject, Injectable } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/ngx-rxjs';
import { CodeIconGeneratorHttpService } from '../code-icon-generator-http/code-icon-generator-http.service';
import { CodeIconGeneratorStoreService } from '../code-icon-generator-store/code-icon-generator-store.service';


@Injectable ()
export class CodeIconGeneratorService {
  constructor (
    private readonly _http: CodeIconGeneratorHttpService,
    private readonly _store: CodeIconGeneratorStoreService,
    // private readonly _rxjs: RxjsService,
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
  ) {}

  public loadIcons (): void {
    // this._http.getIcons().pipe(this._rxjs.ta)
  }
}
