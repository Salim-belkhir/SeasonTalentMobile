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
  type: "SIGN_UP",
});

export { signIn, signUp };
