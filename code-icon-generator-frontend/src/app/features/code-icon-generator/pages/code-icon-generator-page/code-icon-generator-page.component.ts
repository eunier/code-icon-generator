import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpService } from 'app/features/code-icon-generator/services/http/http.service';
import { firstValueFrom } from 'rxjs';

@Component ({
  selector: 'app-code-icon-generator-page',
  templateUrl: './code-icon-generator-page.component.html',
  styleUrls: ['./code-icon-generator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorPageComponent implements OnInit {
  constructor (private readonly _http: HttpService) {}

  public ngOnInit (): void {
    firstValueFrom (this._http.getIcons ()).then (console.log);
  }
}
