import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { RXJS_SERVICE, Rxjs } from '@workspace/ngx-rxjs';
import { CodeIconGeneratorHttpService } from '../../services/code-icon-generator-http/code-icon-generator-http.service';

@Component ({
  selector: 'app-code-icon-generator-page',
  templateUrl: './code-icon-generator-page.component.html',
  styleUrls: ['./code-icon-generator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorPageComponent implements OnInit {
  constructor (
    private readonly _http: CodeIconGeneratorHttpService,
    @Inject (RXJS_SERVICE) private readonly _rxjs: Rxjs,
  ) {}

  public ngOnInit (): void {
    this._rxjs.firstValueFrom (this._http.getIcons ()).then (console.log);
  }
}
