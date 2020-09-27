import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { firebase } from "@config";
import { CoreDataModule } from "@libraries/core-data";

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TableModule } from "@libraries/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreDataModule.register({
      firebase,
      devtool: {
        maxAge: 25,
        logOnly: !environment.production,
      },
    }),
    TableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
