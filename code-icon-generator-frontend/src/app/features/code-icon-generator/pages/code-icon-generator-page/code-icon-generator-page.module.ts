import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeIconGeneratorComponentModule } from '../../components/code-icon-generator/code-icon-generator.module';
import { CodeIconGeneratorPageComponent } from './code-icon-generator-page.component';



@NgModule ({
  declarations: [CodeIconGeneratorPageComponent],
  imports: [CodeIconGeneratorComponentModule, CommonModule],
  exports: [CodeIconGeneratorPageComponent],
})
export class CodeIconGeneratorPageComponentModule {}
