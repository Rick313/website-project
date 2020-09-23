import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

/* ---------------------------------- Load ---------------------------------- */
export const loadUsers = createAction(
  "[User api] - Load user",
  props<{ where?: any }>()
);
export const usersLoaded = createAction(
  "[User api] - Users loaded",
  props<{ data: User[] }>()
);
export const loadUsersFail = createAction("[User api] - Load user fail");

/* --------------------------------- Update --------------------------------- */
export const updateUser = createAction(
  "[User api] - Update user",
  props<{ id: string; update: Partial<User> }>()
);
export const userUpdated = createAction(
  "[User api] - User updated",
  props<{ data: User }>()
);
export const updateUserFail = createAction("[User api] - Update user fail");

/* --------------------------------- Exports -------------------------------- */
export const UsersActions = {
  load: loadUsers,
};

export const UserActions = {
  update: updateUser,
};
