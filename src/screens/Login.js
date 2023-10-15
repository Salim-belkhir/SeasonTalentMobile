import { LoginLayout } from "~/components";

/**
 * Renders the Login screen.
 * @param {object} navigation - The navigation object used to navigate between screens.
 * @returns {JSX.Element} - The LoginLayout component.
 */
const Login = ({ navigation }) => {
  return <LoginLayout navigation={navigation} />;
};

export default Login;
