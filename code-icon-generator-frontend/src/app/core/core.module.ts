import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxRxjsModule } from '@workspace/ngx-rxjs';
import { IconService } from './services/icon/icon.service';

@NgModule ({
  providers: [IconService],
  exports:[NgxRxjsModule],
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
