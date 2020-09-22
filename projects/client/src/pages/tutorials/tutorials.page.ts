import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details/details.component";
import { ListComponent } from "./list/list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: ":id", component: DetailsComponent },
];

@NgModule({
  declarations: [DetailsComponent, ListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TutorialsPageModule {}
