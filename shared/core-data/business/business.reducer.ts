import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Business, BusinessList } from "./business.model";
import { loadBusinessFail, businessLoaded } from "./business.action";
import { AppState } from "../reducers";
import { findMany, findManyOptions, selectObjectKeys } from "shared/utils";
import { FindOne, findOne } from "shared/utils/findOne";

export interface BusinessState extends EntityState<Business> {}
const adapter: EntityAdapter<Business> = createEntityAdapter<Business>({
  selectId: (business: Business) => {
    return business.id;
  },
});
const intialState: BusinessState = adapter.getInitialState();

export const businessReducer = createReducer(
  intialState,
  on(businessLoaded, (state, { data }) => adapter.setAll(data, state)),
  on(loadBusinessFail, (state) => state)
);

export const BusinessSelectors = {
  feature: createFeatureSelector<BusinessState>("business"),
  list: createSelector(
    (state: AppState) => state.business,
    (state: BusinessState, props: findManyOptions<Business>) =>
      findMany<Business>(Object.values(state.entities), props)
  ),
  get: createSelector(
    (state: AppState) => state.business,
    (state: BusinessState, props: FindOne<Business>) =>
      findOne<Business>(Object.values(state.entities), props)
  ),
};
