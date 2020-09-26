import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer } from "@ngrx/store";
import { User } from "./user.model";

export interface UserState extends EntityState<User> {}
const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
});
const initialState: UserState = adapter.getInitialState();
export const userReducer = createReducer(initialState);
