import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ButtonModule, BusinessCardModule } from "@libraries/ui";
import { HomeComponent } from "./home.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    BusinessCardModule,
  ],
})
export class HomePageModule {}
