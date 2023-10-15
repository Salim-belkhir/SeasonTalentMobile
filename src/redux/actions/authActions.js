const GOOGLE_SIGN_IN = "GOOGLE_SIGN_IN";
const GOOGLE_SIGN_OUT = "GOOGLE_SIGN_OUT";

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

export { googleSignIn, googleSignOut, GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT };
