import Immutable from "immutable";
import { combineReducers } from "redux-immutable";

const initialState = Immutable.fromJS({});

function reducer(state, action) {
  switch (action.type) {
    default:
      break;
  }
  return state;
}

export { initialState };
export default reducer;
