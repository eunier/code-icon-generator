import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component ({
  selector: 'app-code-icon-generator',
  templateUrl: './code-icon-generator.component.html',
  styleUrls: ['./code-icon-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeIconGeneratorComponent {}
