import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { EstructuraModule } from './estructura/estructura.module';
import { SharedModule } from './shared/shared.module';
import localeES from '@angular/common/locales/es';
import { registerLocaleData} from "@angular/common";
registerLocaleData(localeES);

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstructuraModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
