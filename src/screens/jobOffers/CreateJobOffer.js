import React from "react";
import { View, StyleSheet } from "react-native";
import { MainHeader, Typography, DefaultLayout, TextInput } from "~/components";
import { Formik } from "formik";
import * as Yup from "yup";

// validation schema
// nom de l'offre
// date de début - date de fin
// selectionner l'etablissement parmis la liste des etablissements de l'utilisateur
// le salaire
// les avantages
// les compétences
// la description de l'offre

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Requis"),
  startDate: Yup.date().required("Requis"),
  endDate: Yup.date().required("Requis"),
  salary: Yup.number().required("Requis"),
  description: Yup.string().required("Requis"),
});

const initialValues = {
  title: "",
  startDate: "",
  endDate: "",
  place: "",
  salary: "",
  description: "",
  advantages: [],
  skills: [],
};

const CreateJobOffer = ({ navigation }) => {
  const handleCreateJobOffer = (values) => {
    // Handle sign up logic here
    console.log(values);
    navigation.navigate("Details");
  };

  const formikProps = {
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleCreateJobOffer,
  };

  return (
    <DefaultLayout navigation={navigation}>
      <View style={styles.container}>
        <MainHeader.basicHeader />
        <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
          Création d’une offre d’emploi
        </Typography>

        <Formik {...formikProps}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              <TextInput
                label="Titre de l'offre"
                leftIcon="carryout"
                placeholder="Titre de l'offre"
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                error={touched.title && errors.title}
                returnKeyType="next"
              />
              <TextInput
                label="Date de début"
                leftIcon="calendar"
                placeholder="Date de début"
                onChangeText={handleChange("startDate")}
                onBlur={handleBlur("startDate")}
                value={values.startDate}
                error={touched.startDate && errors.startDate}
                returnKeyType="next"
              />
              <TextInput
                label="Date de fin"
                leftIcon="calendar"
                placeholder="Date de fin"
                onChangeText={handleChange("endDate")}
                onBlur={handleBlur("endDate")}
                value={values.endDate}
                error={touched.endDate && errors.endDate}
              />
              <TextInput
                label="Lieu"
                leftIcon="enviromento"
                placeholder="Lieu"
                onChangeText={handleChange("place")}
                onBlur={handleBlur("place")}
                value={values.place}
                error={touched.place && errors.place}
              />
              <TextInput
                label="Salaire"
                leftIcon="wallet"
                placeholder="Salaire"
                onChangeText={handleChange("salary")}
                onBlur={handleBlur("salary")}
                value={values.salary}
                error={touched.salary && errors.salary}
              />
              <TextInput
                label="Description"
                leftIcon="filetext1"
                placeholder="Description"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                error={touched.description && errors.description}
              />
            </>
          )}
        </Formik>
      </View>
    </DefaultLayout>
  );
};

export default CreateJobOffer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 23,
    paddingRight: 23,
  },
  currentOffersTitle: {
    marginTop: 19,
    marginBottom: 21,
    fontSize: 16,
  },
});
