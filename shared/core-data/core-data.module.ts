import { HttpClientModule } from "@angular/common/http";
import { InjectionToken, ModuleWithProviders, NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFireStorage } from "@angular/fire/storage";

import { reducers } from "./reducers";
import { effects } from "./effects";

const API_REGISTER = new InjectionToken<{}>("ApiRegister");

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    AngularFireAuth,
    AngularFirestoreModule,
    // AngularFireAnalyticsModule,
  ],
  exports: [StoreModule, EffectsModule],
})
export class CoreDataModule {
  static register(options): ModuleWithProviders<CoreDataModule> {
    return {
      ngModule: CoreDataModule,
      providers: [{ provide: API_REGISTER, useValue: options }],
    };
  }
}
