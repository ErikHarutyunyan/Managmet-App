import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {
  currentUserReducer,
} from "./features/currentUser/currentUserSlice";

import {messageError} from "./features/currentUser/message";


const store = createStore(
  combineReducers({
    user: currentUserReducer,
    message: messageError,
  }),

  applyMiddleware(thunk)
);

export default store;
