import { createReducer, on } from "@ngrx/store";
import { User } from "../user";
import {
  loginFail,
  loginSuccess,
  logoutFail,
  logoutSuccess,
  registerFail,
  registerSuccess,
} from "./auth.action";

export interface AuthState {
  authenticated: boolean;
  user: User;
}

const initialState: AuthState = {
  authenticated: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(registerSuccess, (state, payload) => payload),
  on(registerFail, (state, payload) => payload),
  on(loginSuccess, (state, payload) => payload),
  on(loginFail, (state, payload) => payload),
  on(logoutSuccess, (state, payload) => payload),
  on(logoutFail, (state, payload) => payload)
);
