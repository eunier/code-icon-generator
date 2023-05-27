import { Inject, Injectable } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/ngx-rxjs';
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
    // TODO create service for atob
    const res = await this._rxjs.firstValueFrom (this._http.getIcons ());
    const icons = res.map ((el) => window.atob (el.content));
    this._store.icons = icons;
  }
}
