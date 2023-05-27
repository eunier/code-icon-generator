import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RXJS_TOKEN, Rxjs } from '@workspace/angular/rxjs';
import { SVG_JSV_TOKEN, SvgJs } from '@workspace/angular/svgdotjs/svg.js';
import { CodeIconGeneratorStoreService } from '../../services/code-icon-generator-store/code-icon-generator-store.service';
import { CodeIconGeneratorService } from '../../services/code-icon-generator/code-icon-generator.service';

@Component ({
  selector: 'app-code-icon-generator',
  templateUrl: './code-icon-generator.component.html',
  styleUrls: ['./code-icon-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorComponent {
  public readonly icons$ = this._store.icons$;
  public readonly nonFolderIcon$ = this.icons$.pipe (
    this._rxjs.map ((icons) => icons.filter ((i) => !i.isFolder).slice (0)[0]),
  );
  public readonly folderIcon$ = this.icons$.pipe (
    this._rxjs.map ((icons) => icons.filter ((i) => i.isFolder).slice (0)[0]),
  );
  public readonly joined$ = this._rxjs
    .combineLatest ({
      nonFolderIcon: this.nonFolderIcon$,
      folderIcon: this.folderIcon$,
    })
    .pipe (
      this._rxjs.map (({ nonFolderIcon, folderIcon }) =>
        this._service.joinSvgStrings (nonFolderIcon.svg, folderIcon.svg),
      ),
    );

  constructor (
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
    @Inject (SVG_JSV_TOKEN) private readonly _svgService: SvgJs,
    private readonly _service: CodeIconGeneratorService,
    private readonly _store: CodeIconGeneratorStoreService,
  ) {}
}
