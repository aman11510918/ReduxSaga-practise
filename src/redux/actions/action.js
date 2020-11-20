import * as type from "./actionTypes";

export function getUsers(users) {
  return {
    type: type.GET_USERS,
    payload: users,
  };
}
