import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codeIconGeneratorRoutes } from 'app/modules/code-icon-generator/code-icon-generator.routes';

@NgModule ({
  imports: [CommonModule, RouterModule.forChild (codeIconGeneratorRoutes)],
})
export class CodeIconGeneratorModule {}
