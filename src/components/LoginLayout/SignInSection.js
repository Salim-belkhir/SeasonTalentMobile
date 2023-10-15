import TextInput from "../TextInput";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { Colors } from "~/theme";

// These are the initial values for the form fields
const initialValues = { email: "", password: "" };

// This is the validation schema used to validate the form fields
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Votre mail est invalide !").required("Requis"),
  password: Yup.string().required("Requis"),
});

/**
 * A component that displays a login form and handles the login logic.
 *
 * @param {object} navigation - The navigation object from React Navigation.
 * @returns {JSX.Element} - A JSX element that displays the login form.
 */
const LogInSection = ({ navigation }) => {
  /**
   * Handles the login logic when the form is submitted.
   *
   * @param {object} values - The form values submitted by the user.
   */
  const handleLogIn = (values) => {
    // Handle log in logic here
    console.log(values);
    navigation.navigate("Details");
  };

  // Formik props object that contains the initial values, validation schema, and submit function
  const formikProps = {
    initialValues: initialValues, // The initial values for the form fields
    validationSchema, // The validation schema for the form fields
    onSubmit: handleLogIn, // The function to call when the form is submitted
  };

  return (
    <Formik {...formikProps}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          {/* Email input field */}
          <TextInput
            placeholder="Email"
            leftIcon="mail"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={touched.email && errors.email}
            autoCapitalize="none"
            InputStyle={styles.input}
            returnKeyType="next"
          />

          {/* Password input field */}
          <TextInput
            placeholder="Mot de passe"
            leftIcon="lock"
            rightIcon="eye"
            textContentType="oneTimeCode"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={touched.password && errors.password}
            secureTextEntry
            InputStyle={styles.input}
            autoCapitalize="none"
          />

          {/* Login button */}
          <Button
            label="Se connecter"
            onPress={handleSubmit}
            labelTypographyStyle={styles.buttonLabel}
            hideIcon
            buttonStyle={styles.button}
            disabled={
              !(
                values.email &&
                values.password &&
                !errors.email &&
                !errors.password
              )
            }
          />
        </View>
      )}
    </Formik>
  );
};

export default LogInSection;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
  },
  button: {
    marginTop: 20,
  },
  buttonLabel: {
    color: Colors.main_white,
    fontSize: 16,
  },
});
