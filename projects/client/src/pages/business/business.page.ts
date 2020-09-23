import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SvgModule, ButtonModule } from "@shared/directives";
import { CardModule } from "@shared/components";

import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: ":name/:id", component: DetailsComponent },
];

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    SvgModule,
    ButtonModule,
  ],
})
export class BusinessPageModule {}
