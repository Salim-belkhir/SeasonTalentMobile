import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from "../actions/authActions";

const initialeState = {
  userInfo: null,
  isAuthenticated: false,
};

const authReducer = (state = initialeState, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
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
