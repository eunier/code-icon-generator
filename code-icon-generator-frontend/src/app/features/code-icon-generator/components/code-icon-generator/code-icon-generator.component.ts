import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RXJS_TOKEN, Rxjs } from '@workspace/ngx-rxjs';
import { CodeIconGeneratorStoreService } from '../../services/code-icon-generator-store/code-icon-generator-store.service';

@Component ({
  selector: 'app-code-icon-generator',
  templateUrl: './code-icon-generator.component.html',
  styleUrls: ['./code-icon-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorComponent {
  public readonly icons$ = this._store.icons$.pipe (
    this._rxjs.map ((icons) =>
      icons.map ((i) => ({
        html: this._sanitizer.bypassSecurityTrustHtml (i),
        string: i,
      })),
    ),
  );
  public readonly iconsHtml$ = this._store.icons$.pipe (
    this._rxjs.map ((icons) =>
      icons.map ((i) => this._sanitizer.bypassSecurityTrustHtml (i)),
    ),
  );

  constructor (
    private readonly _store: CodeIconGeneratorStoreService,
    @Inject (RXJS_TOKEN) private readonly _rxjs: Rxjs,
    private readonly _sanitizer: DomSanitizer,
  ) {}
}
