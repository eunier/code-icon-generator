import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codeIconGeneratorModuleRoutes } from 'app/modules/code-icon-generator/code-icon-generator-module.routes';


@NgModule ({
  imports: [CommonModule, RouterModule.forChild (codeIconGeneratorModuleRoutes)],
})
export class CodeIconGeneratorModule {}
