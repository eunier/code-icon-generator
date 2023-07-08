import { Injectable } from '@angular/core';
import { SVG } from '@svgdotjs/svg.js';
import { IconData } from '../../interfaces/icon.interface';
import { CodeIconGeneratorHttpService } from '../code-icon-generator-http/code-icon-generator-http.service';
import { CodeIconGeneratorStoreService } from '../code-icon-generator-store/code-icon-generator-store.service';

@Injectable ()
export class CodeIconGeneratorService {
  public constructor (
    private readonly _http: CodeIconGeneratorHttpService,
    private readonly _store: CodeIconGeneratorStoreService,
  ) {}

  public joinSvgStrings (
    nonFolderIcon: string,
    folderIcon: string,
  ): string {
    const folderSvg = SVG (folderIcon);
    folderSvg.size (200);
    const nonFolderSvg = SVG (nonFolderIcon);
    nonFolderSvg.size (18);
    nonFolderSvg.move (10, 6);
    folderSvg.add (nonFolderSvg);
    const joined = folderSvg.svg ();
    return joined;
  }

  public async loadIcons (): Promise<void> {
    const res = await this._http.getIcons ();

    const icons = res.map ((el): IconData => {
      const name = el.path.replace ('icons/', '').replace ('.svg', '');
      const svgString = window.atob (el.content);

      return {
        name,
        svgString,
      };
    });

    this._store.icons = icons;
    // const files = await firstValueFrom (this._http.getIcons ());
    // const icons = files.map (this._transformFileToIcon);
    // this._store.icons = icons;
  }

  // private _transformFileToIcon (file: File): Icon {
  //   const icon: Icon = {
  //     file,
  //     svg: window.atob (file.content),
  //     isFolder: file.url.includes ('folder-'),
  //   };

  //   return icon;
  // }
}
