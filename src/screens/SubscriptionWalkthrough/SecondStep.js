import { Formik } from "formik";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Button, SubscriptionWalkthroughLayout, TextInput } from "~/components";
import { Colors } from "~/theme";

const initialValues = { name: "", adress: "", contact: "" };

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Requis"),
  adress: Yup.string().required("Requis"),
  contact: Yup.string().email("Email invalide").required("Requis"),
});

const SecondStep = ({ navigation, route }) => {
  const [data, setData] = useState(route.params.data);

  const handleSecondStep = (values) => {
    console.log(values);
    setData({ ...data, ...values });
    navigation.navigate("ThirdStep", { data: data });
  };

  const formikProps = {
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleSecondStep,
  };

  return (
    <SubscriptionWalkthroughLayout step={1}>
      <View style={styles.container}>
        <Formik {...formikProps}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.inputs}>
              <TextInput
                placeholder="Nom"
                leftIcon="book"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                error={touched.name && errors.name}
                returnKeyType="next"
                inputStyle={{ marginBottom: 20 }}
              />
              <TextInput
                placeholder="Adresse"
                leftIcon="enviromento"
                onChangeText={handleChange("adress")}
                onBlur={handleBlur("adress")}
                value={values.adress}
                error={touched.adress && errors.adress}
                returnKeyType="next"
                inputStyle={{ marginBottom: 20 }}
              />
              <TextInput
                placeholder="Contact"
                leftIcon="mail"
                onChangeText={handleChange("contact")}
                onBlur={handleBlur("contact")}
                value={values.contact}
                error={touched.contact && errors.contact}
              />

              <View style={styles.button}>
                <Button
                  label="Continuez"
                  onPress={handleSubmit}
                  labelTypographyStyle={styles.buttonLabel}
                  hideIcon
                  disabled={
                    !(
                      values.name &&
                      values.adress &&
                      values.contact &&
                      !errors.name &&
                      !errors.adress &&
                      !errors.contact
                    )
                  }
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SubscriptionWalkthroughLayout>
  );
};

export default SecondStep;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    backgroundColor: Colors.main_white,
  },
  page: {
    flex: 1,
    paddingTop: 25,
  },
  inputs: {
    paddingBottom: 30,
  },
  button: {
    paddingTop: 25,
  },
  buttonLabel: {
    color: Colors.main_white,
  },
});
