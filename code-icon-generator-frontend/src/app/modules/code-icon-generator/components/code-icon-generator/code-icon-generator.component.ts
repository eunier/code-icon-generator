import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component ({
  // selector: 'app-code-icon-generator',
  selector: 'app-test',
  templateUrl: './code-icon-generator.component.html',
  styleUrls: ['./code-icon-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorComponent {}
