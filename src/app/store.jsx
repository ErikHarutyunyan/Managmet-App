import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {ini} from "./features/currentUser/currentUserSlice"
const store = createStore(
  combineReducers({

  }),
  {

  },
  applyMiddleware(thunk)
);

export default store;
