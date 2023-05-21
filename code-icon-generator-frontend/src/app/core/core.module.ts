import { NgModule, Optional, SkipSelf } from '@angular/core';
import { IconService } from 'app/core/services/icon/icon.service';
import { RxjsService } from 'app/core/services/rxjs/rxjs.service';

@NgModule ({
  providers: [IconService, RxjsService],
})
export class CoreModule {
  constructor (
    @Optional () @SkipSelf () private readonly _codeModule: CoreModule,
  ) {
    if (this._codeModule) {
      throw new Error ('You should import core module only in the root module');
    }
  }
}
