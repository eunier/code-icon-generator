import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RxjsModule } from '@workspace/angular/rxjs';

@NgModule ({
  providers: [],
  exports: [RxjsModule],
})
export class CoreModule {
  constructor (
    @Optional () @SkipSelf () private readonly _codeModule: CoreModule,
  ) {
    if (this._codeModule) {
      throw new Error (
        'You should import core module only in the root module',
      );
    }
  }
}
