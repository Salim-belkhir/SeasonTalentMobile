/**
 * Action creator function that returns an action object with type "LOG_IN".
 * @returns {Object} Action object with type "LOG_IN".
 */
const logIn = () => ({
  type: "LOG_IN",
});

/**
 * Action creator function that returns an action object with type "SIGN_IN".
 * @returns {Object} Action object with type "SIGN_IN".
 */
const signIn = () => ({
    type: "SIGN_IN",
  });
  
export { logIn, signIn };