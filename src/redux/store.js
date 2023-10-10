import { createStore } from "redux";
import myReducer from "./reducers";

// Create a store
const store = createStore(myReducer);

export default store;
