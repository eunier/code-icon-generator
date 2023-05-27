import { Inject, Injectable } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/angular/rxjs';
import { CodeIconGeneratorHttpService } from '../code-icon-generator-http/code-icon-generator-http.service';
import { CodeIconGeneratorStoreService } from '../code-icon-generator-store/code-icon-generator-store.service';

@Injectable ()
export class CodeIconGeneratorService {
  constructor (
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
    private readonly _http: CodeIconGeneratorHttpService,
    private readonly _store: CodeIconGeneratorStoreService,
  ) {}

  public async loadIcons (): Promise<void> {
    const res = await this._rxjs.firstValueFrom (this._http.getIcons ());
    this._store.files = res;
  }
}
