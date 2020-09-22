import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import {
  loadSettings,
  loadSettingsFail,
  settingsLoaded,
} from "./settings.action";
import { SettingsService } from "./settings.service";

@Injectable()
export class SettingsEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly service: SettingsService
  ) {}

  laodSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSettings),
      mergeMap(() =>
        this.service.get().pipe(
          map((data) => settingsLoaded({ data })),
          catchError(() => of(loadSettingsFail))
        )
      )
    )
  );
}
