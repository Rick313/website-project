import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowService } from './window.service';

@NgModule({
  imports: [CommonModule],
  providers: [WindowService],
})
export class WindowModule {}
