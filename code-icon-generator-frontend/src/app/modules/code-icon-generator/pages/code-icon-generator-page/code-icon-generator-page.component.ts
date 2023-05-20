import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeIconGeneratorHttpService } from 'app/modules/code-icon-generator/services/code-icon-generator-http/code-icon-generator-http.service';

@Component ({
  selector: 'app-code-icon-generator-page',
  templateUrl: './code-icon-generator-page.component.html',
  styleUrls: ['./code-icon-generator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorPageComponent implements OnInit {
  constructor (private readonly _http: CodeIconGeneratorHttpService){}

  public ngOnInit (): void {
      this._http.getIcons ().subscribe (console.log)
  }
}
