const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";

/**
 * Action creator function that returns an action object with type "SIGN_IN".
 * @returns {Object} Action object with type "SIGN_IN".
 */
const signIn = () => ({
  type: SIGN_IN,
});

/**
 * Action creator function that returns an action object with type "SIGN_UP".
 * @returns {Object} Action object with type "SIGN_UP".
 */
const signUp = () => ({
  type: SIGN_UP,
});

export { signIn, signUp, SIGN_IN, SIGN_UP };
