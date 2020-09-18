import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SvgModule } from '@shared/directives';
import { WindowModule } from '@shared/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    WindowModule,
    SvgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
