import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCardComponent } from './business-card.component';



@NgModule({
  declarations: [BusinessCardComponent],
  imports: [
    CommonModule
  ],
  exports: [BusinessCardComponent]
})
export class BusinessCardModule { }
