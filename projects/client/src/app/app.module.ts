import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { firebase } from "@config";
import { SvgModule } from "@shared/directives";
import { WindowModule } from "@shared/services";
import { CoreDataModule } from "@shared/core-data";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    WindowModule,
    SvgModule,
    CoreDataModule.register({
      firebase,
      devtool: {
        maxAge: 25,
        logOnly: !environment.production,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
