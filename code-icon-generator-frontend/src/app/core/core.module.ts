import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule ({})
export class CoreModule {
  constructor (
    @Optional () @SkipSelf () private readonly _codeModule: CoreModule,
  ) {
    if (this._codeModule) {
      throw new Error ('You should import core module only in the root module');
    }
  }
}
