import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SvgDirective } from './svg.directive';
import { SvgService } from './svg.service';

@NgModule({
  declarations: [SvgDirective],
  providers: [SvgDirective],
  imports: [CommonModule, HttpClientModule],
  exports: [SvgDirective],
})
export class SvgModule {}
