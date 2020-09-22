import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers } from "./reducers";
import { effects } from "./effects";

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  exports: [StoreModule, EffectsModule],
})
export class CoreDataModule {}
