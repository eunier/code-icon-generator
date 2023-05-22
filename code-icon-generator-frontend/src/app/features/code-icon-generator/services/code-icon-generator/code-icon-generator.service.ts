import { Injectable } from '@angular/core';
import { RxjsService } from '../../../../core/services/rxjs/rxjs.service';
import { CodeIconGeneratorHttpService } from '../code-icon-generator-http/code-icon-generator-http.service';
import { CodeIconGeneratorStoreService } from '../code-icon-generator-store/code-icon-generator-store.service';


@Injectable ()
export class CodeIconGeneratorService {
  constructor (
    private readonly _http: CodeIconGeneratorHttpService,
    private readonly _store: CodeIconGeneratorStoreService,
    private readonly _rxjs: RxjsService,
  ) {}

  public loadIcons (): void {
    // this._http.getIcons().pipe(this._rxjs.ta)
  }
}
