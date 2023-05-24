import { Inject, Injectable } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/ngx-rxjs';
import { CodeIconGeneratorHttpService } from '../code-icon-generator-http/code-icon-generator-http.service';

@Injectable ()
export class CodeIconGeneratorStoreService {
  private readonly _icons = new this._rxjs.BehaviorSubject<string[]> ([]);
  // public readonly icons$ = this._icons.asObservable ();
  public readonly icons$ = this._http
    .getIcons ()
    .pipe (
      this._rxjs.map ((res) => res.map ((el) => window.atob (el.content))),
    );

  constructor (
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
    private readonly _http: CodeIconGeneratorHttpService,
  ) {}

  public set icons (icons: string[]) {
    this._icons.next (icons);
  }

  public get icons (): string[] {
    return this._icons.getValue ();
  }
}
/*
    const res = await this._rxjs.firstValueFrom (this._http.getIcons ());
    const icons = res.map ((el) => window.atob (el.content));
    this._store.icons = icons;
*/
