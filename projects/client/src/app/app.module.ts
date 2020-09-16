import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SvgModule } from '@shared/directives';
import { WindowModule } from '@shared/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SvgModule, WindowModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
