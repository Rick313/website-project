import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { AppState } from "../reducers";
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
  error?: any;
}

const initialState: AuthState = {
  authenticated: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(registerSuccess, (state) => state),
  on(registerFail, (state, { error }) => {
    return { ...state, error };
  }),
  on(loginSuccess, (state, { authenticated, user }) => {
    return { authenticated, user, error: null };
  }),
  on(loginFail, (state, { error }) => {
    return { ...state, error };
  }),
  on(logoutSuccess, (state, { authenticated, user }) => {
    return { authenticated, user, error: null };
  }),
  on(logoutFail, (state, { error }) => {
    return { ...state, error };
  })
);

export const AuthSelector = {
  feature: createFeatureSelector("auth"),
  user: createSelector(
    (state: AppState) => state.auth,
    ({ user, error }: AuthState) => ({ user, error })
  ),
  authenticated: createSelector(
    (state: AppState) => state.auth,
    ({ error, authenticated }: AuthState) => ({ authenticated, error })
  ),
};
