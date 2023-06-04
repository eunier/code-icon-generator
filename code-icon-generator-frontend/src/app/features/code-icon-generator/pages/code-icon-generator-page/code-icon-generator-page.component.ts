import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeIconGeneratorService } from '../../services/code-icon-generator/code-icon-generator.service';

@Component ({
  selector: 'app-code-icon-generator-page',
  templateUrl: './code-icon-generator-page.component.html',
  styleUrls: ['./code-icon-generator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorPageComponent implements OnInit {
  constructor (private readonly _service: CodeIconGeneratorService) {}

  public ngOnInit (): void {
    this._service.loadIcons ();
  }
}
