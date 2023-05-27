import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeIconGeneratorStoreService } from '../../services/code-icon-generator-store/code-icon-generator-store.service';

@Component ({
  selector: 'app-code-icon-generator',
  templateUrl: './code-icon-generator.component.html',
  styleUrls: ['./code-icon-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorComponent {
  public readonly icons$ = this._store.icons$;

  constructor (
    // @Inject (SVG_JSV_TOKEN) private readonly _svg: SvgJs,
    private readonly _store: CodeIconGeneratorStoreService,
  ) {}
}
