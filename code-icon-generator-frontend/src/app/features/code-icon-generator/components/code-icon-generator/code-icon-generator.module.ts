import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgStringRendererComponentModule } from '../svg-string-renderer/svg-string-renderer.module';
import { CodeIconGeneratorComponent } from './code-icon-generator.component';

@NgModule ({
  declarations: [CodeIconGeneratorComponent],
  imports: [CommonModule, SvgStringRendererComponentModule],
  exports: [CodeIconGeneratorComponent],
})
export class CodeIconGeneratorComponentModule {}
