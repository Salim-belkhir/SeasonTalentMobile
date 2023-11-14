import { combineReducers } from "redux";
import authReducer from "./authReducer";
import logInReducer from "./logInReducer";
import jobOfferReducer from "./jobOfferReducer";
/**
 * Combines multiple reducers into a single reducer function.
 * @function
 * @name combineReducers
 * @param {Object} reducers - An object whose values correspond to different reducer functions.
 * @returns {Function} A reducer function that invokes every reducer inside the passed object, and builds a state object with the same shape.
 */
const myReducer = combineReducers({
  logSignIn: logInReducer,
  googleAuth: authReducer,
  jobOffers: jobOfferReducer,
});

export default myReducer;
