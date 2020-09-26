import { createAction, props } from "@ngrx/store";
import { BusinessList } from "./business.model";

export const loadBusiness = createAction(
  "[Business API] - Load business.",
  props<{ where?: any }>()
);
export const businessLoaded = createAction(
  "[Business API] - Business loaded.",
  props<{ data: BusinessList }>()
);
export const loadBusinessFail = createAction(
  "[Business API] - Load buisness fail."
);

export const BusinessActions = {
  load: loadBusiness,
};
