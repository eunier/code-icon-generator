import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codeIconGeneratorFeatureRoutes } from 'app/features/code-icon-generator/code-icon-generator-feature.routes';
import { CodeIconGeneratorPageComponentModule } from 'app/features/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.module';
import { CodeIconGeneratorHttpService } from 'app/features/code-icon-generator/services/code-icon-generator-http/code-icon-generator-http.service';

@NgModule ({
  imports: [
    RouterModule.forChild (codeIconGeneratorFeatureRoutes),
    CodeIconGeneratorPageComponentModule,
  ],
  providers: [CodeIconGeneratorHttpService],
})
export class CodeIconGeneratorModuleModule {}
