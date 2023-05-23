import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeIconGeneratorService } from '../../services/code-icon-generator/code-icon-generator.service';

@Component ({
  selector: 'app-code-icon-generator',
  templateUrl: './code-icon-generator.component.html',
  styleUrls: ['./code-icon-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorComponent implements OnInit {
  constructor (private readonly _service: CodeIconGeneratorService){}

  public ngOnInit (): void {

  }
}
