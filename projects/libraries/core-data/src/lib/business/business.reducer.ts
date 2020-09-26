import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Business } from "./business.model";
import { loadBusinessFail, businessLoaded } from "./business.action";
import { AppState } from "../reducers";
import { findMany, FindManyOptions, FindOne, findOne } from "../../utils";

export interface BusinessState extends EntityState<Business> {}
const adapter: EntityAdapter<Business> = createEntityAdapter<Business>({
  selectId: (business: Business) => business.id,
});
const initialState: BusinessState = adapter.getInitialState();

export const businessReducer = createReducer(
  initialState,
  on(businessLoaded, (state, { data }) => adapter.setAll(data, state)),
  on(loadBusinessFail, (state) => state)
);

export const BusinessSelectors = {
  feature: createFeatureSelector<BusinessState>("business"),
  list: createSelector(
    (state: AppState) => state.business,
    (state: BusinessState, props: FindManyOptions<Business>) =>
      findMany<Business>(Object.values(state.entities), props)
  ),
  get: createSelector(
    (state: AppState) => state.business,
    (state: BusinessState, props: FindOne<Business>) =>
      findOne<Business>(Object.values(state.entities), props)
  ),
};
