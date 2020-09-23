import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule, SvgModule } from "@shared/directives";

const routes: Routes = [{ path: "", component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    SvgModule,
  ],
})
export class ContactPageModule {}
