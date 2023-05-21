import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codeIconGeneratorFeatureRoutes } from 'app/features/code-icon-generator/code-icon-generator-feature.routes';
import { CodeIconGeneratorPageComponentModule } from 'app/features/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.module';
import { HttpService } from 'app/features/code-icon-generator/services/http/http.service';

@NgModule ({
  imports: [
    CodeIconGeneratorPageComponentModule,
    HttpClientModule,
    RouterModule.forChild (codeIconGeneratorFeatureRoutes),
  ],
  providers: [HttpService],
})
export class CodeIconGeneratorFeatureModule {}
