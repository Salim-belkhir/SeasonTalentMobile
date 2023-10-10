import { createStore } from "redux";
import myReducer from "./reducers";

/**
 * Creates a Redux store with the specified reducer function.
 * @function
 * @param {Function} reducer - The reducer function for the store.
 * @returns {Object} - The created Redux store.
 */
const store = createStore(myReducer);

export default store;
