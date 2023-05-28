import { Inject, Injectable } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/angular/rxjs';
import { SVG_JSV_TOKEN, SvgJs } from '@workspace/angular/svgdotjs/svg.js';
import { File } from '@workspace/code-icon-generator/interfaces';
import { Icon } from '../../interfaces/icon.interface';
import { CodeIconGeneratorHttpService } from '../code-icon-generator-http/code-icon-generator-http.service';
import { CodeIconGeneratorStoreService } from '../code-icon-generator-store/code-icon-generator-store.service';

@Injectable ()
export class CodeIconGeneratorService {
  constructor (
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
    @Inject (SVG_JSV_TOKEN) private readonly _svgService: SvgJs,
    private readonly _http: CodeIconGeneratorHttpService,
    private readonly _store: CodeIconGeneratorStoreService,
  ) {}

  public async loadIcons (): Promise<void> {
    const files = await this._rxjs.firstValueFrom (this._http.getIcons ());
    const icons = files.map (this._transformFileToIcon);
    this._store.icons = icons;
  }

  public joinSvgStrings (
    nonFolderIcon: string,
    folderIcon: string,
  ): string {
    const nonFolderSvg = this._svgService.SVG (nonFolderIcon);
    const folderSvg = this._svgService.SVG (folderIcon);
    folderSvg.add (nonFolderSvg);
    const joined = folderSvg.svg ();
    return joined;
  }

  private _transformFileToIcon (file: File): Icon {
    const icon: Icon = {
      file,
      svg: window.atob (file.content),
      isFolder: file.url.includes ('folder-'),
    };

    return icon;
  }
}
