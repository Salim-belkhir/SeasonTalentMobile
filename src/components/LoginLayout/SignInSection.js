import TextInput from "../TextInput";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { Colors } from "~/theme";

const SignInSection = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSignUp = (values) => {
    // Handle sign up logic here
    console.log(values);
    navigation.navigate("Details");
  };

  const handleAlertModalClose = () => {
    setAlertModalVisible(false);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSignUp}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          <TextInput
            placeholder="Name"
            leftIcon="user"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            error={errors.name}
            touched={touched.name}
            autoCapitalize="none"
            keyboardType="default"
            InputStyle={styles.input}
          />
          <TextInput
            placeholder="Email"
            leftIcon="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            autoCapitalize="none"
            keyboardType="email-address"
            InputStyle={styles.input}
          />
          <TextInput
            placeholder="Password"
            leftIcon="lock"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            secureTextEntry
            InputStyle={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            leftIcon="lock"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            secureTextEntry
            InputStyle={styles.input}
          />
          <Button
            title="Sign Up"
            onPress={handleSubmit}
            style={styles.button}
            labelTypographyStyle={styles.buttonLabel}
            disabled={
              errors.email ||
              errors.password ||
              errors.confirmPassword ||
              !values.email ||
              !values.password ||
              !values.confirmPassword
            }
            type={
              errors.email ||
              errors.password ||
              errors.confirmPassword ||
              !values.email ||
              !values.password ||
              !values.confirmPassword
                ? "disabled"
                : "primary"
            }
            hideIcon
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInSection;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonLabel: {
    color: Colors.main_white,
    fontSize: 16,
  },
});
