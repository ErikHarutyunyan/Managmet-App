import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {
  initialCurrentUser,
  currentUserReducer,
} from "./features/currentUser/currentUserSlice";


const store = createStore(
  combineReducers({
    user: currentUserReducer,
  }),
  {
    user: initialCurrentUser,
  },
  applyMiddleware(thunk)
);

export default store;
