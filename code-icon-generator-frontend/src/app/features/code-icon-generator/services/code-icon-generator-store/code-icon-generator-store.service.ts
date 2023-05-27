import { Inject, Injectable } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/ngx-rxjs';

@Injectable ()
export class CodeIconGeneratorStoreService {
  private readonly _icons = new this._rxjs.BehaviorSubject<string[]> ([]);
  public readonly icons$ = this._icons.asObservable ();

  public set icons (icons: string[]) {
    this._icons.next (icons);
  }

  public get icons (): string[] {
    return this._icons.getValue ();
  }

  constructor (@Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs) {}
}
