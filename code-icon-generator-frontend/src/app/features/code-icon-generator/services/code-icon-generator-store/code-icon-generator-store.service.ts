import { Inject, Injectable } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/angular/rxjs';
import { File } from '@workspace/code-icon-generator/interfaces';
import { Icon } from '../../interfaces/icon.interface';

@Injectable ()
export class CodeIconGeneratorStoreService {
  private readonly _files = new this._rxjs.BehaviorSubject<File[]> ([]);

  public set files (icons: File[]) {
    this._files.next (icons);
  }

  public get files (): File[] {
    return this._files.getValue ();
  }

  public readonly files$ = this._files.asObservable ();
  public readonly icons$ = this._files.pipe (
    this._rxjs.map ((files) =>
      files.map (
        (f): Icon => ({
          file: f,
          svg: window.atob (f.content),
          isFolder: f.url.includes ('folder-'),
        }),
      ),
    ),
  );

  constructor (@Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs) {}
}
