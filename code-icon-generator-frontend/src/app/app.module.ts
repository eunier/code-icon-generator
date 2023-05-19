import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routes';
import { CoreModule } from 'app/core/core.module';

@NgModule ({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot (appRoutes, {
      initialNavigation: 'enabledBlocking',
      enableTracing: isDevMode (),
    }),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
