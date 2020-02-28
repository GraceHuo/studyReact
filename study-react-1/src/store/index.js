// import { createStore, applyMiddleware } from "../KRedux";
import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

function countReducer(state = 0, action) {
  action.payload = action.payload || 1;
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "MINUS":
      return state - action.payload;
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    count: countReducer
  }),
  applyMiddleware(logger, thunk)
);
export default store;

function logger() {
  return dispatch => action => {
    console.log(action.type);
    return dispatch(action);
  };
}

function thunk({ getState, dispatch }) {
  return dispatch => action => {
    // action 可以是对象，还可以是函数
    if (typeof action === "function") {
      return action(dispatch, getState);
    } else {
      return dispatch(action);
    }
  };
}
