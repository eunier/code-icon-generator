import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeIconGeneratorComponentModule } from 'app/features/code-icon-generator/components/code-icon-generator/code-icon-generator.module';
import { CodeIconGeneratorPageComponent } from 'app/features/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.component';


@NgModule ({
  declarations: [CodeIconGeneratorPageComponent],
  imports: [CodeIconGeneratorComponentModule, CommonModule],
  exports: [CodeIconGeneratorPageComponent],
})
export class CodeIconGeneratorPageComponentModule {}
