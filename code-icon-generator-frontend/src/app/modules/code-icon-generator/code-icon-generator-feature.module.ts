import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codeIconGeneratorFeatureRoutes } from 'app/modules/code-icon-generator/code-icon-generator-feature.routes';
import { CodeIconGeneratorPageComponentModule } from 'app/modules/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.module';
import { CodeIconGeneratorHttpService } from 'app/modules/code-icon-generator/services/code-icon-generator-http/code-icon-generator-http.service';

@NgModule ({
  imports: [
    CodeIconGeneratorPageComponentModule,
    HttpClientModule,
    RouterModule.forChild (codeIconGeneratorFeatureRoutes),
  ],
  providers: [CodeIconGeneratorHttpService],
})
export class CodeIconGeneratorModuleModule {}
