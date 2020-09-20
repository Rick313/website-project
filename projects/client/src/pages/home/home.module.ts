import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { CardModule } from "@shared/components";
import { ButtonModule } from "@shared/directives";
import { HomeComponent } from "./home.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CardModule,
  ],
})
export class HomeModule {}
