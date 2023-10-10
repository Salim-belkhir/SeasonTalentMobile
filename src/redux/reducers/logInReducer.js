const initialeState = {
  logState: false,
};

const logInReducer = (state = initialeState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        logState: true,
      };
    case "SIGN_IN":
      return { 
        ...state,
        logState: false,
      };
    default:
      return state;
  }
};

export default logInReducer;