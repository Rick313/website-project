import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import { loadUsers, loadUsersFail, usersLoaded } from "./user.action";
import { UserService } from "./user.service";

@Injectable()
export class UserEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly service: UserService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap((action) =>
        this.service.findAll(action.where).pipe(
          map((data) => usersLoaded({ data })),
          catchError((err) => of(loadUsersFail))
        )
      )
    )
  );
}
