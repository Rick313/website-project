import { createAction, props } from "@ngrx/store";
import { User } from "../user";

export const register = createAction(
  "[Auth API] - Register",
  props<{ email: string; password: string }>()
);
export const registerSuccess = createAction(
  "[Auth API] - Register succes",
  props<{ user: null; authenticated: false }>()
);
export const registerFail = createAction(
  "[Auth API] - Register fail",
  props<{ user: null; authenticated: false }>()
);

export const login = createAction(
  "[Auth API] - Log in",
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  "[Auth API] - Log in sucess",
  props<{ user: User; authenticated: true }>()
);
export const loginFail = createAction(
  "[Auth API] - Log in fail",
  props<{ user: null; authenticated: false }>()
);

export const logout = createAction(
  "[Auth API] - Log out",
  props<{ user: User }>()
);
export const logoutSuccess = createAction(
  "[Auth API] - Log out success",
  props<{ user: null; authenticated: false }>()
);
export const logoutFail = createAction(
  "[Auth API] - Log out fail",
  props<{ user: User; authenticated: true }>()
);

export const AuthActions = {
  register,
  logout,
  login,
};
