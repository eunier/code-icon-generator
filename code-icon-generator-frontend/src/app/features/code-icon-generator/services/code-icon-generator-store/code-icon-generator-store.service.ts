import { Inject, Injectable } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/angular/rxjs';
import { Observable } from 'rxjs';
import { Icon } from '../../interfaces/icon.interface';

@Injectable ()
export class CodeIconGeneratorStoreService {
  public readonly icons$: Observable<Icon[]>;
  private readonly _files = new this._rxjs.BehaviorSubject<File[]> ([]);
  private readonly _icons = new this._rxjs.BehaviorSubject<Icon[]> ([]);

  public constructor (@Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs) {
    this.icons$ = this._icons.asObservable ();
  }

  public get icons (): Icon[] {
    return this._icons.getValue ();
  }

  public set icons (icons: Icon[]) {
    this._icons.next (icons);
  }
}
