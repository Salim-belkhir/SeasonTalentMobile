import TextInput from "../TextInput";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { Colors } from "~/theme";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Votre mail est invalide !").required("Requis"),
  password: Yup.string().required("Requis"),
});

const LogInSection = ({ navigation }) => {
  const handleLogIn = (values) => {
    // Handle log in logic here
    console.log(values);
    navigation.navigate("Details");
  };

  const formikProps = {
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleLogIn,
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
            autoCapitalize="none"
          />
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
