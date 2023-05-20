import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'code-icon-generator', pathMatch: 'full' },
  {
    path: 'code-icon-generator',
    loadChildren: () =>
      import(
        './features/code-icon-generator/code-icon-generator-feature.module'
      ).then ((m) => m.CodeIconGeneratorModuleModule),
  },
];
