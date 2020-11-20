import * as type from "./actionTypes";

export function getUsers() {
  return {
    type: type.GET_USERS_REQUESTED,
  };
}
