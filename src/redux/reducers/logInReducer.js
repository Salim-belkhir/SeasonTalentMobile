const initialeState = {
  logState: true,
};

/**
 * Reducer function for handling login state changes.
 *
 * @param {Object} state - The current state of the reducer.
 * @param {Object} action - The action object containing the type and payload.
 * @returns {Object} - The new state of the reducer.
 */
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
