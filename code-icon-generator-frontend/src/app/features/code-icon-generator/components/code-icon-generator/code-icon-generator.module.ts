import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeIconGeneratorComponent } from 'app/features/code-icon-generator/components/code-icon-generator/code-icon-generator.component';


@NgModule ({
  declarations: [CodeIconGeneratorComponent],
  imports: [CommonModule],
  exports: [CodeIconGeneratorComponent],
})
export class CodeIconGeneratorComponentModule {}
