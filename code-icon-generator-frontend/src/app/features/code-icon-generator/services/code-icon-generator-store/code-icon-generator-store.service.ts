import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IconData } from '../../interfaces/icon.interface';

@Injectable ()
export class CodeIconGeneratorStoreService {
  public readonly icons$: Observable<IconData[]>;
  private readonly _icons = new BehaviorSubject<IconData[]> ([]);

  public constructor () {
    this.icons$ = this._icons.asObservable ();
  }

  public get icons (): IconData[] {
    return this._icons.getValue ();
  }

  public set icons (icons: IconData[]) {
    this._icons.next (icons);
  }
}
