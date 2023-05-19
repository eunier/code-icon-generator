import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'code-icon-generator', pathMatch: 'full' },
  {
    path: 'code-icon-generator',
    loadChildren: () =>
      import(
        './modules/code-icon-generator/code-icon-generator-module.module'
      ).then ((m) => m.CodeIconGeneratorModuleModule),
  },
];
