import { createStore } from "redux";

const initialState = {
  users: undefined,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_UPDATED_USERS_DATA":
      return { ...state, users: action.payload };
    // return action.payload;
    default:
      return state;
  }
}

const store = createStore(usersReducer);
export default store;
