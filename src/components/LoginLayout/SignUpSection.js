import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import TextInput from "../TextInput";
import { Colors } from "~/theme";

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

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInSection = ({ navigation }) => {
  const handleSignUp = (values) => {
    // Handle sign up logic here
    console.log(values);
    navigation.navigate("Details");
  };

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
          <TextInput
            placeholder="Name"
            leftIcon="user"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            error={touched.name && errors.name}
            returnKeyType="next"
          />
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
            InputStyle={styles.input}
            returnKeyType="next"
          />
          <TextInput
            placeholder="Password"
            leftIcon="lock"
            rightIcon="eye"
            textContentType="oneTimeCode"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={touched.password && errors.password}
            secureTextEntry
            InputStyle={styles.input}
            returnKeyType="next"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Confirm Password"
            leftIcon="lock"
            rightIcon="eye"
            textContentType="oneTimeCode"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            error={touched.confirmPassword && errors.confirmPassword}
            secureTextEntry
            InputStyle={styles.input}
            returnKeyType="done"
            autoCapitalize="none"
            editable={values.password ? true : false}
          />
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

export default SignInSection;

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
