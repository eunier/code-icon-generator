import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RxjsService } from 'app/core/services/rxjs/rxjs.service';
import { CodeIconGeneratorHttpService } from 'app/features/code-icon-generator/services/code-icon-generator-http/code-icon-generator-http.service';

@Component ({
  selector: 'app-code-icon-generator-page',
  templateUrl: './code-icon-generator-page.component.html',
  styleUrls: ['./code-icon-generator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorPageComponent implements OnInit {
  constructor (
    private readonly _http: CodeIconGeneratorHttpService,
    private readonly _rxjs: RxjsService,
  ) {}

  public ngOnInit (): void {
    this._rxjs.firstValueFrom (this._http.getIcons ()).then (console.log)
  }
}
