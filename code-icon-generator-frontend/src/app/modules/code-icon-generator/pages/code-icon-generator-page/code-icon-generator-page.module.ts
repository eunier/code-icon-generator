import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeIconGeneratorComponentModule } from 'app/modules/code-icon-generator/components/code-icon-generator/code-icon-generator.module';
import { CodeIconGeneratorPageComponent } from 'app/modules/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.component';

@NgModule ({
  declarations: [CodeIconGeneratorPageComponent],
  imports: [CodeIconGeneratorComponentModule, CommonModule],
})
export class CodeIconGeneratorPageComponentModule {}
