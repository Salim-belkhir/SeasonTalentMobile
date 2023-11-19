import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import * as Yup from "yup";
import { companiesActions } from "~/redux/actions";
import { Colors } from "~/theme";
import Button from "../Button";
import TextInput from "../TextInput";
import Typography from "../Typography";
import LoadFiles from "./loadFiles";

// Define mapDispatchToProps to connect createJobOffer action to the component
const mapDispatchToProps = {
  createCompany: companiesActions.createCompany,
  updateCompany: companiesActions.updateCompany,
};

// the validation schema
const validationSchema = Yup.object({
  title: Yup.string().required("Requis"),
  address: Yup.string().required("Requis"),
  contact: Yup.string().email("Adresse email invalide").required("Requis"),
});

// Define the initial values for the form fields
const initialValues = {
  title: "",
  address: "",
  contact: "",
};

const CreateInputFields = ({ dataToUpdate, createCompany, updateCompany }) => {
  const [formValues, setFormValues] = useState({});
  const [logo, setLogo] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const navigation = useNavigation();

  // Define the initial values for the form fields, checking for the presence of dataToUpdate
  const initialFormValues = dataToUpdate ? { ...dataToUpdate } : initialValues;

  // If there is dataToUpdate, set the initial form values to update an existing company
  useEffect(() => {
    setFormValues(initialFormValues);
  }, []);

  // Handle setting initial values when dataToUpdate changes
  useEffect(() => {
    if (dataToUpdate) {
      setFormValues({ ...dataToUpdate });
    }
  }, [dataToUpdate]);

  const handleCompanyCreation = useCallback(() => {
    // console.log(formValues);
    if (dataToUpdate) {
      updateCompany(formValues);
    } else {
      console.log("createCompany", formValues);
      createCompany({
        ...formValues,
        logo,
        uploadedFiles,
      });
      navigation.goBack();
    }
  }, []);

  const checkIfCanCreateOrUpdateCompany = useCallback(
    (values, errors) => {
      // Checking if the form is filled and if there is an error
      const isErrorsEmpty = Object.values(errors).every(
        (error) => error === ""
      );
      // the form fields are all text inputs, so we can check if the values are empty
      const isFormFilled = Object.values(values).every((value) => value !== "");

      // Checking if the logo is filled
      const isLogoFilled = logo !== null;

      // Checking if the proofs are filled
      const isProofsFilled = uploadedFiles.length > 0;

      return (
        !isFormFilled || !isLogoFilled || !isProofsFilled || !isErrorsEmpty
      );
    },
    [formValues, logo, uploadedFiles]
  );

  const formikProps = {
    initialValues: formValues,
    validationSchema,
    onSubmit: handleCompanyCreation,
  };

  return (
    <View style={styles.inputFieldsContainer}>
      <Formik {...formikProps}>
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
          <>
            <Typography
              type="l_bold"
              typographyStyle={styles.currentOffersTitle}
            >
              {dataToUpdate
                ? "Modification d’un établissement"
                : " Création d’un établissement"}
            </Typography>
            <KeyboardAwareScrollView
              contentContainerStyle={styles.scrollContent}
              extraScrollHeight={Platform.OS === "ios" ? 130 : 0}
            >
              <TextInput
                label="Titre de l'établissement"
                leftIcon="carryout"
                placeholder="Titre de l'établissement"
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                error={touched.title && errors.title}
                returnKeyType="next"
              />

              <TextInput
                label="Adresse de l'établissement"
                placeholder="Adresse de l'établissement"
                leftIcon="enviromento"
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                value={values.address}
                error={touched.address && errors.address}
                returnKeyType="next"
                inputStyle={styles.input}
              />

              <TextInput
                label="Contact de l'établissement"
                placeholder="Contact de l'établissement"
                leftIcon="mail"
                onChangeText={handleChange("contact")}
                onBlur={handleBlur("contact")}
                value={values.contact}
                error={touched.contact && errors.contact}
                returnKeyType="next"
                inputStyle={styles.input}
                keyboardType="email-address"
              />
            </KeyboardAwareScrollView>
            <LoadFiles
              logo={logo}
              setLogo={setLogo}
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
            />
            <Button
              label={
                dataToUpdate
                  ? "Modifier l’établissement"
                  : "Créer l’établissement"
              }
              hideIcon
              buttonStyle={styles.buttonStyle}
              labelTypographyStyle={styles.labelTypographyStyle}
              onPress={handleSubmit}
              disabled={checkIfCanCreateOrUpdateCompany(values, errors)}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default connect(null, mapDispatchToProps)(CreateInputFields);

const styles = StyleSheet.create({
  inputFieldsContainer: {
    marginTop: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  currentOffersTitle: {
    marginBottom: 21,
    fontSize: 16,
  },
  input: {
    marginTop: 15,
  },
  buttonStyle: {
    marginTop: 20,
  },
  labelTypographyStyle: {
    color: Colors.main_white,
  },
});
