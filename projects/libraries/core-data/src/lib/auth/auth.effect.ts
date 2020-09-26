import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import {
  login,
  loginFail,
  loginSuccess,
  register,
  registerFail,
  registerSuccess,
  logout,
  logoutFail,
  logoutSuccess,
} from "./auth.action";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly service: AuthService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap((action) =>
        this.service
          .register(action.email, action.password)
          .then(() => registerSuccess())
          .catch((error) => registerFail({ error }))
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.service.login(action.email, action.password).pipe(
          map((user) => loginSuccess({ user, authenticated: true })),
          catchError((error) => of(loginFail({ error })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      switchMap((action) =>
        this.service
          .logout()
          .then(() => logoutSuccess({ user: null, authenticated: false }))
          .catch((error) => logoutFail({ error }))
      )
    )
  );
}
