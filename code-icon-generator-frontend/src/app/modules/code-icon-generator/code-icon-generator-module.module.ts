import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codeIconGeneratorModuleRoutes } from 'app/modules/code-icon-generator/code-icon-generator-module.routes';
import { CodeIconGeneratorPageComponentModule } from 'app/modules/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.module';

@NgModule ({
  imports: [
    CodeIconGeneratorPageComponentModule,
    CommonModule,
    RouterModule.forChild (codeIconGeneratorModuleRoutes),
  ],
})
export class CodeIconGeneratorModuleModule {}
