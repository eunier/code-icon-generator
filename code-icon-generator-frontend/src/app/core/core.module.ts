import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { IconService } from 'app/core/services/icon/icon.service';

@NgModule ({
  declarations: [],
  imports: [CommonModule],
  providers: [IconService],
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
