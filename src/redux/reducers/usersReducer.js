import * as type from '../actions/actionTypes'
const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
