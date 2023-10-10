import { combineReducers } from "redux";
import logInReducer from "./logInReducer";

const myReducer = combineReducers({
  // add reducers here
  logSignIn: logInReducer,
});

export default myReducer;