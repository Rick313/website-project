import { createAction, props } from "@ngrx/store";
import { Settings } from "./settings.model";

export const loadSettings = createAction("[Settings API] - Load settings.");
export const settingsLoaded = createAction(
  "[Settings API] - Settings loaded.",
  props<{ data: Settings }>()
);
export const loadSettingsFail = createAction(
  "[Settings API] - Load settings fail."
);

export const SettingsActions = {
  load: loadSettings,
};
