const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
const GOOGLE_SIGN_IN = "GOOGLE_SIGN_IN";
const GOOGLE_SIGN_OUT = "GOOGLE_SIGN_OUT";

/**
 * Action creator function that returns an action object with type "SIGN_IN".
 * @returns {Object} Action object with type "SIGN_IN".
 */
const signIn = () => ({
  type: "SIGN_IN",
});

/**
 * Action creator function that returns an action object with type "SIGN_UP".
 * @returns {Object} Action object with type "SIGN_UP".
 */
const signUp = () => ({
  type: SIGN_UP,
});

/** Action creator function that returns an action object with type "GOOGLE_SIGN_IN" and payload "user".
 * @param {Object} user - The user object returned from Google.
 * @returns {Object} Action object with type "GOOGLE_SIGN_IN" and payload "user".
 */
const googleSignIn = (user) => ({
  type: GOOGLE_SIGN_IN,
  payload: user,
});

/**
 * Action creator function that returns an action object with type "GOOGLE_SIGN_OUT".
 * @returns {Object} Action object with type "GOOGLE_SIGN_OUT".
 */
const googleSignOut = () => ({
  type: GOOGLE_SIGN_OUT,
});

export {
  signIn,
  signUp,
  googleSignIn,
  googleSignOut,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
  SIGN_IN,
  SIGN_UP,
};
