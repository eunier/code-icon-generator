import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codeIconGeneratorFeatureRoutes } from 'app/features/code-icon-generator/code-icon-generator-feature.routes';
import { CodeIconGeneratorPageComponentModule } from 'app/features/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.module';

@NgModule ({
  imports: [
    RouterModule.forChild (codeIconGeneratorFeatureRoutes),
    CodeIconGeneratorPageComponentModule,
  ],
})
export class CodeIconGeneratorModuleModule {}
