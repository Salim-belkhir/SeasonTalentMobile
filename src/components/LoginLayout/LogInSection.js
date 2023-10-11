import TextInput from "../TextInput";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import { Colors } from "~/theme";

const LogInSection = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleLogIn = (values) => {
    // Handle log in logic here
    console.log(values);
    navigation.navigate("Details");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogIn}
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
            placeholder="Email"
            leftIcon="mail"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            autoCapitalize="none"
            // keyboardType="email-address"
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
          <Button
            title="Log In"
            onPress={handleSubmit}
            // type={
            //   errors.email ||
            //   errors.password ||
            //   !values.email ||
            //   !values.password
            //     ? "disabled"
            //     : "primary"
            // }
            // disabled={!values.email || !values.password}
            labelTypographyStyle={styles.buttonLabel}
            hideIcon
          />
        </View>
      )}
    </Formik>
  );
};

export default LogInSection;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
  buttonLabel: {
    color: Colors.main_white,
    fontSize: 16,
  },
});
