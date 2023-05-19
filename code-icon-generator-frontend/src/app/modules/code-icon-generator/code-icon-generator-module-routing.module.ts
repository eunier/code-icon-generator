import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeIconGeneratorPageComponent } from 'app/modules/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.component';
import { CodeIconGeneratorPageComponentModule } from 'app/modules/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.module';

export const routes: Routes = [
  { path: '', component: CodeIconGeneratorPageComponent },
];

@NgModule ({
  imports: [
    RouterModule.forChild (routes),
    CodeIconGeneratorPageComponentModule,
  ],
})
export class CodeIconGeneratorModuleRoutingModule {}
