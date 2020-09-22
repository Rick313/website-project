import { ActionReducerMap } from "@ngrx/store";
import { BusinessState, businessReducer } from "./business/business.reducer";
import { SettingsState, settingsReducer } from "./settings/settings.reducer";

// Shape of application state
export interface AppState {
  business: BusinessState;
  settings: SettingsState;
}

export const reducers: ActionReducerMap<AppState> = {
  business: businessReducer,
  settings: settingsReducer,
};
