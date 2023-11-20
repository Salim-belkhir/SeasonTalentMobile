import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import * as Yup from "yup";
import { returnFileImage } from "~/constants";
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
  name: Yup.string().required("Requis"),
  address: Yup.string().required("Requis"),
  contact: Yup.string().email("Adresse email invalide").required("Requis"),
});

// Define the initial values for the form fields
const initialValues = {
  name: "",
  address: "",
  contact: "",
};

const CreateInputFields = ({ dataToUpdate, createCompany, updateCompany }) => {
  const [logo, setLogo] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const navigation = useNavigation();

  // Define the initial values for the form fields, checking for the presence of dataToUpdate
  const initialFormValues = dataToUpdate ? { ...dataToUpdate } : initialValues;

  // If there is dataToUpdate, set the initial form values to update an existing job offer
  const [formValues, setFormValues] = useState(initialFormValues);

  // Handle setting initial values when dataToUpdate changes
  useEffect(() => {
    if (dataToUpdate) {
      setFormValues({ ...dataToUpdate });
      setLogo(dataToUpdate.logo);
      // add the  logo: returnFileImage(file.mimeType), to the uploadedFiles array
      setUploadedFiles([
        ...dataToUpdate.proofs.map((file) => ({
          ...file,
          logo: returnFileImage(file.mimeType),
        })),
      ]);
    }
  }, [dataToUpdate]);

  const handleCompanyCreation = (values) => {
    // If there is dataToUpdate, update the company
    if (dataToUpdate) {
      updateCompany({
        ...values,
        logo: logo,
        proofs: uploadedFiles,
        id: dataToUpdate.id,
      });
    } else {
      // If there is no dataToUpdate, create a new company
      createCompany({
        ...values,
        logo: logo,
        proofs: uploadedFiles,
      });
    }
    navigation.navigate("CompaniesHome");
  };

  const checkIfCanCreateCompany = useCallback(
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

  const checkIfCanUpdateCompany = useCallback(
    (values, errors) => {
      // Checking if there are any errors
      const isErrorsEmpty = Object.values(errors).every(
        (error) => error === ""
      );

      // Checking if the form is filled
      const isFormFilled = Object.values(values).every((value) => value !== "");

      // Checking if the form data is different from the dataToUpdate
      const isFormDifferent = Object.keys(values).some(
        (key) => values[key] !== dataToUpdate[key]
      );

      // Checking if the logo is filled and different from the dataToUpdate
      const isLogoChanged = logo !== null && logo !== dataToUpdate.logo;

      // Checking if the proofs are filled and different from the dataToUpdate
      const isProofsChanged =
        uploadedFiles.length > 0 &&
        uploadedFiles.length !== dataToUpdate.proofs.length;

      // if can update we return true else we return false
      return (
        isErrorsEmpty &&
        ((isFormFilled && isFormDifferent) || isLogoChanged || isProofsChanged)
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
              typographyStyle={styles.currentOffersname}
            >
              {dataToUpdate
                ? "Modification d’un établissement"
                : " Création d’un établissement"}
            </Typography>

            <TextInput
              label="Nom de l'établissement"
              leftIcon="carryout"
              placeholder="Nom de l'établissement"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              error={touched.name && errors.name}
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
              disabled={
                dataToUpdate
                  ? !checkIfCanUpdateCompany(values, errors)
                  : checkIfCanCreateCompany(values, errors)
              }
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
  scrollContent: {},
  currentOffersname: {
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
