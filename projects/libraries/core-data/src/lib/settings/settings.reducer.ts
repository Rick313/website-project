import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { loadSettingsFail, settingsLoaded } from "./settings.action";
import { Settings } from "./settings.model";

export interface SettingsState extends Settings {}
const initialState: SettingsState = {
  infos: {
    owner: {
      name: "RAFAIDEEN Richard",
    },
  },
};

export const settingsReducer = createReducer(
  initialState,
  on(settingsLoaded, (state, { data }) => (data ? data : state)),
  on(loadSettingsFail, (state) => state)
);

export const SettingsSelector = {
  feature: createFeatureSelector<SettingsState>("settings"),
};
