import { Routes } from '@angular/router';
import { CodeIconGeneratorPageComponent } from 'app/modules/code-icon-generator/pages/code-icon-generator-page/code-icon-generator-page.component';

export const codeIconGeneratorFeatureRoutes: Routes = [
  { path: '', component: CodeIconGeneratorPageComponent },
];

// @NgModule ({
//   imports: [
//     RouterModule.forChild (routes),
//     CodeIconGeneratorPageComponentModule,
//   ],
// })
// export class CodeIconGeneratorFeatureRoutingModule {}
