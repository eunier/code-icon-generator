import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { codeIconGeneratorFeatureRoutes } from 'app/features/code-icon-generator/code-icon-generator-feature.routes';
import { CodeIconGeneratorPageComponentModule } from 'app/features/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.module';
import { CodeIconGeneratorHttpService } from 'app/features/code-icon-generator/services/code-icon-generator-http/code-icon-generator-http.service';
import { CodeIconGeneratorStoreService } from 'app/features/code-icon-generator/services/code-icon-generator-store/code-icon-generator-store.service';
import { CodeIconGeneratorService } from 'app/features/code-icon-generator/services/code-icon-generator/code-icon-generator.service';

@NgModule ({
  imports: [
    CodeIconGeneratorPageComponentModule,
    HttpClientModule,
    RouterModule.forChild (codeIconGeneratorFeatureRoutes),
  ],
  providers: [
    CodeIconGeneratorHttpService,
    CodeIconGeneratorService,
    CodeIconGeneratorStoreService,
  ],
})
export class CodeIconGeneratorFeatureModule {}
