import { Formik } from "formik";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import {
  Button,
  SubscriptionWalkthroughLayout,
  TextInput,
  Typography,
} from "~/components";
import { Colors } from "~/theme";

const initialValues = { siret: "", phoneNumber: "" };

const validationSchema = Yup.object().shape({
  siret: Yup.string()
    .matches(/^[0-9]{14}$/, "Exactement 14 chiffres requis")
    .required("Requis"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Exactement 10 chiffres requis")
    .required("Requis"),
});

const FirstStep = ({ navigation, route }) => {
  const [data, setData] = useState(route.params.data);

  const handleFirstStep = (values) => {
    console.log(values);
    setData({ ...data, ...values });
    navigation.navigate("SecondStep", { data: data });
  };

  const formikProps = {
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleFirstStep,
  };

  return (
    <SubscriptionWalkthroughLayout step={0}>
      <Formik {...formikProps}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <Typography type="l_bold" typographyStyle={styles.siret_title}>
              N° SIRET
            </Typography>
            <TextInput
              leftIcon="idcard"
              keyboardType="numeric"
              maxLength={14}
              onChangeText={handleChange("siret")}
              onBlur={handleBlur("siret")}
              value={values.siret}
              error={touched.siret && errors.siret}
              autoCapitalize="none"
            />

            <Typography type="l_bold" typographyStyle={styles.num_tel}>
              Num Tel
            </Typography>
            <TextInput
              leftIcon="phone"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              error={touched.phoneNumber && errors.phoneNumber}
              autoCapitalize="none"
            />

            <View style={styles.button}>
              <Button
                label="Continuez"
                onPress={handleSubmit}
                labelTypographyStyle={styles.buttonLabel}
                hideIcon
                disabled={
                  !(
                    values.siret &&
                    values.phoneNumber &&
                    !errors.siret &&
                    !errors.phoneNumber
                  )
                }
              />
            </View>
          </View>
        )}
      </Formik>
    </SubscriptionWalkthroughLayout>
  );
};

export default FirstStep;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
  page: {
    flex: 1,
    paddingTop: 25,
  },
  progression: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  actual_step: {
    width: 30,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    backgroundColor: Colors.greenBlue,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    backgroundColor: Colors.grey,
  },
  schema_view: {
    justifyContent: "center",
    alignItems: "center",
  },
  schema: {
    width: 284,
    height: 284,
    resizeMode: "contain",
  },
  siret_title: {
    color: Colors.greenBlue,
    fontSize: 15,
    paddingBottom: 10,
  },
  num_tel: {
    color: Colors.greenBlue,
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    paddingTop: 20,
  },
  buttonLabel: {
    color: Colors.main_white,
  },
});
