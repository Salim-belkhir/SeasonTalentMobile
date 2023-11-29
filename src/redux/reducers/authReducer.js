import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from "../actions/authActions";

const initialeState = {
  userInfo: null,
  isAuthenticated: false,
};

/**
 * Reducer function for authentication related actions
 * @param {Object} state - The current state of the reducer
 * @param {Object} action - The action object containing the action type and payload
 * @returns {Object} - The updated state after applying the action
 */
const authReducer = (state = initialeState, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
      console.log("action.payload", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload,
      };
    case GOOGLE_SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default authReducer;
