import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { BusinessService } from "./business.service";
import {
  loadBusiness,
  businessLoaded,
  loadBusinessFail,
} from "./business.action";

@Injectable()
export class BusinessEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly service: BusinessService
  ) {}

  loadBuisness$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBusiness),
      mergeMap((action) =>
        this.service.get(action.where).pipe(
          map((data) => businessLoaded({ data })),
          catchError(() => of(loadBusinessFail))
        )
      )
    )
  );
}
