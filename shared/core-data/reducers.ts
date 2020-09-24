import { ActionReducerMap } from "@ngrx/store";

import { AuthState, authReducer } from "./auth/auth.reducer";
import { UserState, userReducer } from "./user/user.reducer";
import { BusinessState, businessReducer } from "./business/business.reducer";
import { SettingsState, settingsReducer } from "./settings/settings.reducer";

// Shape of application state
export interface AppState {
  business: BusinessState;
  settings: SettingsState;
  auth: AuthState;
  users: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  business: businessReducer,
  settings: settingsReducer,
  users: userReducer,
};
