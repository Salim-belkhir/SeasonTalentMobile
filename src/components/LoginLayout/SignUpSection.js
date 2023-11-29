import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Colors } from "~/theme";
import Button from "../Button";
import TextInput from "../TextInput";

// This is the validation schema used to validate the form fields
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Requis"),
  email: Yup.string().email("Votre mail est invalide !").required("Requis"),
  password: Yup.string().required("Requis"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Les mots de passe ne correspondent pas"
    )
    .required("Requis"),
});

// These are the initial values for the form fields
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

/**
 * A component that displays a sign-up form and handles sign-up logic.
 * @param {Object} navigation - The navigation object used to navigate between screens.
 * @returns {JSX.Element} - A JSX element that displays the sign-up form.
 */
const SignUpSection = ({ navigation }) => {
  /**
   * A function that handles sign-up logic.
   * @param {Object} values - An object containing the form values.
   */
  const handleSignUp = (values) => {
    // Handle sign up logic here
    console.log(values);
    navigation.navigate("SubscriptionWalkthrough", {
      screen: "FirstStep",
      params: { data: values },
    });
  };

  // Formik props object
  const formikProps = {
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleSignUp,
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
        isValid,
      }) => (
        <View>
          {/* Name input */}
          <TextInput
            placeholder="Nom Prénom"
            leftIcon="user"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            error={touched.name && errors.name}
            returnKeyType="next"
          />
          {/* Email input */}
          <TextInput
            placeholder="Email"
            leftIcon="mail"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={touched.email && errors.email}
            autoCapitalize="none"
            inputStyle={styles.input}
            returnKeyType="next"
          />
          {/* Password input */}
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
            inputStyle={styles.input}
            returnKeyType="next"
            autoCapitalize="none"
          />
          {/* Confirm password input */}
          <TextInput
            placeholder="Confirmer le mot de passe"
            leftIcon="lock"
            rightIcon="eye"
            textContentType="oneTimeCode"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            error={touched.confirmPassword && errors.confirmPassword}
            secureTextEntry
            inputStyle={styles.input}
            returnKeyType="done"
            autoCapitalize="none"
            editable={values.password ? true : false}
          />
          {/* Sign up button */}
          <Button
            label="S'inscrire"
            onPress={handleSubmit}
            labelTypographyStyle={styles.buttonLabel}
            hideIcon
            buttonStyle={styles.button}
            disabled={
              !(
                values.name &&
                values.email &&
                values.password &&
                values.confirmPassword &&
                !errors.name &&
                !errors.email &&
                !errors.password &&
                !errors.confirmPassword
              )
            }
          />
        </View>
      )}
    </Formik>
  );
};

export default SignUpSection;

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
  },
  button: {
    marginTop: 15,
  },
  buttonLabel: {
    color: Colors.main_white,
    fontSize: 16,
  },
});
