import { HttpClientModule } from "@angular/common/http";
import { InjectionToken, ModuleWithProviders, NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import {
  AngularFireModule,
  FirebaseAppConfig,
  FirebaseOptions,
  FIREBASE_APP_NAME,
  FIREBASE_OPTIONS,
} from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import {
  AngularFireAnalyticsModule,
  ScreenTrackingService,
  UserTrackingService,
} from "@angular/fire/analytics";
import { AngularFireStorageModule } from "@angular/fire/storage";

import {
  StoreDevtoolsModule,
  INITIAL_OPTIONS,
  StoreDevtoolsConfig,
} from "@ngrx/store-devtools";

import { reducers } from "./reducers";
import { effects } from "./effects";

const API_REGISTER = new InjectionToken<{}>("ApiRegister");

interface CoreDataOptions {
  firebase?: FirebaseOptions;
  firebaseConfig?: string | FirebaseAppConfig;
  devtool?: StoreDevtoolsConfig;
  http?: any;
}

/**
 * @deprecated 'Use core-dara form @libraries/code-data'
 */
@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  exports: [StoreModule, EffectsModule],
})
export class CoreDataModule {
  static register(
    options: CoreDataOptions
  ): ModuleWithProviders<CoreDataModule> {
    return {
      ngModule: CoreDataModule,
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: options.firebase },
        { provide: FIREBASE_APP_NAME, useValue: options.firebaseConfig },
        { provide: INITIAL_OPTIONS, useValue: options.devtool },
        { provide: API_REGISTER, useValue: options.http },
      ],
    };
  }
}
