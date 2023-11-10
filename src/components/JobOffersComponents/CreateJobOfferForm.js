import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React, { useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SelectDropdown from "react-native-select-dropdown";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Button, FlatList, TextInput, Typography } from "~/components";
import Icon from "~/components/Icon";
import { jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";

// Define mapDispatchToProps to connect createJobOffer action to the component
const mapDispatchToProps = {
  createJobOffer: jobOfferActions.createJobOffer,
  updateJobOffer: jobOfferActions.updateJobOffer,
};

// Define the validation schema for the form
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Requis"),
  startDate: Yup.date().required("Requis"),
  endDate: Yup.date().required("Requis"),
  salary: Yup.number()
    .typeError("Le salaire doit etre un chiffre")
    .required("Requis"),
  description: Yup.string().required("Requis"),
});

// Define the initial values for the form fields
const initialValues = {
  title: "",
  startDate: "",
  endDate: "",
  company: "",
  salary: "",
  description: "",
  advantage: { label: "", id: "" },
  advantages: [],
  skill: { label: "", id: "" },
  skills: [],
};

// Define the list of establishments to be displayed in the dropdown
const etablissementList = [
  {
    id: 1,
    label: "Etablissement 1",
    value: "etablissement1",
    location: "Montpellier",
  },
  {
    id: 2,
    label: "Etablissement 2",
    value: "etablissement2",
    location: "Paris",
  },
  {
    id: 3,
    label: "Etablissement 3",
    value: "etablissement3",
    location: "Cupertino",
  },
];

/**
 * The CreateJobOfferForm component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.createJobOffer - The function to create a job offer.
 * @returns {JSX.Element} - The component's elements.
 */
const CreateJobOfferForm = ({
  createJobOffer,
  updateJobOffer,
  dataToUpdate,
}) => {
  const navigation = useNavigation();

  // add advantage and skill to dataToUpdate if they don't exist
  if (dataToUpdate && !dataToUpdate.advantage) {
    dataToUpdate.advantage = { label: "", id: "" };
  }

  if (dataToUpdate && !dataToUpdate.skill) {
    dataToUpdate.skill = { label: "", id: "" };
  }

  // Define the initial values for the form fields, checking for the presence of dataToUpdate
  const initialFormValues = dataToUpdate ? { ...dataToUpdate } : initialValues;

  // If there is dataToUpdate, set the initial form values to update an existing job offer
  const [formValues, setFormValues] = React.useState(initialFormValues);

  // Handle setting initial values when dataToUpdate changes
  useEffect(() => {
    if (dataToUpdate) {
      setFormValues({ ...dataToUpdate });
    }
  }, [dataToUpdate]);

  /**
   * Handles the submission of the form to either create or update a job offer.
   *
   * @param {Object} values - The form values.
   */
  const handleJobOfferAction = (values) => {
    const jobOfferData = {
      ...values,
      id: dataToUpdate ? dataToUpdate.id : Math.random().toString(),
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      location: dataToUpdate
        ? dataToUpdate.location
        : etablissementList.find(
            (etablissement) => etablissement.value === values.company
          ).location,
      startDate: values.startDate.toISOString(),
      endDate: values.endDate.toISOString(),
    };

    if (dataToUpdate) {
      // If dataToUpdate exists, update the job offer
      // Assuming an update function from jobOfferActions is available
      // Recompany 'updateJobOffer' with your actual update function

      updateJobOffer(jobOfferData);
    } else {
      // Otherwise, create a new job offer
      createJobOffer(jobOfferData);
    }

    navigation.navigate("EmploisHome");
  };

  // Define the props for the Formik component
  const formikProps = {
    initialValues: formValues,
    validationSchema,
    onSubmit: handleJobOfferAction,
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
        setFieldValue,
      }) => (
        <>
          <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
            {dataToUpdate
              ? "Modification d’une offre d’emploi"
              : " Création d’une offre d’emploi"}
          </Typography>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollContent}
            extraScrollHeight={Platform.OS === "ios" ? 200 : 0}
          >
            {/* Render the title input field */}
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

            {/* Render the date pickers */}
            <View style={styles.dateTimePickersContainer}>
              <View
                style={[
                  styles.dateTimePickerContainer,
                  values.startDate && {
                    borderColor: Colors.primary_color,
                  },
                ]}
              >
                <Icon
                  name="calendar"
                  size={20}
                  color={
                    values.startDate ? Colors.primary_color : Colors.main_grey
                  }
                />
                <Typography
                  type="l_regular"
                  typographyStyle={[
                    styles.dateTimePickerLabel,
                    values.startDate && {
                      color: Colors.primary_color,
                    },
                  ]}
                >
                  Du :
                </Typography>
                <RNDateTimePicker
                  value={
                    dataToUpdate
                      ? new Date(dataToUpdate.startDate)
                      : values.startDate
                      ? new Date(values.startDate)
                      : new Date()
                  }
                  onChange={(event, selectedDate) => {
                    setFieldValue("startDate", selectedDate);
                  }}
                  style={styles.dateTimePicker}
                  textColor={Colors.primary_color}
                  accentColor={Colors.primary_color}
                  locale="fr-FR"
                  minimumDate={new Date()}
                />
              </View>

              <View
                style={[
                  styles.dateTimePickerContainer,
                  values.endDate && {
                    borderColor: Colors.primary_color,
                  },
                ]}
              >
                <Icon
                  name="calendar"
                  size={20}
                  color={
                    values.endDate ? Colors.primary_color : Colors.main_grey
                  }
                />
                <Typography
                  type="l_regular"
                  typographyStyle={[
                    styles.dateTimePickerLabel,
                    values.endDate && {
                      color: Colors.primary_color,
                    },
                  ]}
                >
                  Au :
                </Typography>
                <RNDateTimePicker
                  value={
                    dataToUpdate
                      ? new Date(dataToUpdate.endDate)
                      : values.endDate
                      ? new Date(values.endDate)
                      : new Date()
                  }
                  onChange={(event, selectedDate) => {
                    setFieldValue("endDate", selectedDate);
                  }}
                  style={styles.dateTimePicker}
                  textColor={Colors.primary_color}
                  accentColor={Colors.primary_color}
                  locale="fr-FR"
                  minimumDate={new Date()}
                />
              </View>
            </View>

            <SelectDropdown
              data={etablissementList}
              onSelect={(selectedItem, index) => {
                setFieldValue("company", selectedItem.value);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.label;
              }}
              rowTextForSelection={(item, index) => {
                return item.label;
              }}
              defaultButtonText="Selectionner un établissement"
              renderDropdownIcon={(isOpened) => {
                return (
                  <Icon
                    name={isOpened ? "up" : "down"}
                    color={
                      values.company ? Colors.primary_color : Colors.main_grey
                    }
                    size={24}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              renderSearchInputLeftIcon={() => {
                return (
                  <Icon
                    name="search1"
                    size={20}
                    color={Colors.main_grey}
                    style={{ marginLeft: 10 }}
                  />
                );
              }}
              search
              searchPlaceHolder="Rechercher un établissement"
              buttonStyle={[
                styles.selectButton,
                values.company && { borderBottomColor: Colors.primary_color },
              ]}
              buttonTextStyle={[
                styles.selectButtonText,
                values.company && { color: Colors.primary_color },
              ]}
              dropdownStyle={styles.dropDown}
              rowStyle={styles.dropDownRow}
              rowTextStyle={styles.dropDownRowText}
            />

            <TextInput
              label="Salaire"
              leftIcon="wallet"
              placeholder="Salaire"
              onChangeText={handleChange("salary")}
              onBlur={handleBlur("salary")}
              value={values.salary}
              error={touched.salary && errors.salary}
              inputStyle={styles.input}
            />
            <TextInput
              label="Avantages"
              placeholder="Avantages"
              leftIcon="pluscircleo"
              onChangeText={(value) => {
                setFieldValue("advantage", value);
              }}
              onBlur={handleBlur("advantage")}
              value={values.advantage.label}
              error={touched.advantage && errors.advantage}
              returnKeyType="next"
              onSubmitEditing={() => {
                if (values.advantage.label !== "") {
                  setFieldValue("advantages", [
                    ...values.advantages,
                    {
                      label: values.advantage,
                      id: values.advantages.length + 1,
                    },
                  ]);
                  setFieldValue("advantage", {
                    label: "",
                    id: "",
                  });
                }
              }}
              inputStyle={styles.input}
            />
            <FlatList
              items={values.advantages}
              type={"simpleItems"}
              listStyle={[{ marginTop: values.advantages.length > 0 ? 15 : 0 }]}
              horizontal
              showsHorizontalScrollIndicator={false}
              onPressedItem={(item) => {
                setFieldValue(
                  "advantages",
                  values.advantages.filter((advantage) => advantage !== item)
                );
              }}
            />

            <TextInput
              label="Compétences"
              placeholder="Compétences"
              leftIcon="pluscircleo"
              onChangeText={(value) => {
                setFieldValue("skill", value);
              }}
              onBlur={handleBlur("skill")}
              value={values.skill.label}
              error={touched.skill && errors.skill}
              returnKeyType="next"
              onSubmitEditing={() => {
                if (values.skill.label !== "") {
                  setFieldValue("skills", [
                    ...values.skills,
                    {
                      label: values.skill,
                      id: values.skills.length + 1,
                    },
                  ]);
                  setFieldValue("skill", {
                    label: "",
                    id: "",
                  });
                }
              }}
              inputStyle={styles.input}
            />

            <FlatList
              items={values.skills}
              type={"simpleItems"}
              listStyle={[{ marginTop: values.skills.length > 0 ? 15 : 0 }]}
              horizontal
              showsHorizontalScrollIndicator={false}
              onPressedItem={(item) => {
                setFieldValue(
                  "skills",
                  values.skills.filter((skill) => skill !== item)
                );
              }}
            />

            <TextInput
              placeholder="Description"
              leftIcon="filetext1"
              multiline
              onChangeText={handleChange("description")}
              value={values.description}
              inputStyle={styles.descriptionInput}
              inputTypographyStyle={styles.descriptionInputText}
              textArea
            />
          </KeyboardAwareScrollView>
          <Button
            label={dataToUpdate ? "Modifier" : "Créer"}
            hideIcon
            onPress={handleSubmit}
            buttonStyle={{
              marginTop: 15,
              marginBottom: 45,
            }}
            labelTypographyStyle={{
              color: Colors.main_white,
            }}
            disabled={
              // If dataToUpdate exists
              dataToUpdate
                ? // Check if all fields in dataToUpdate are the same as the form values
                  Object.keys(dataToUpdate).every((key) => {
                    if (key === "advantages" || key === "skills") {
                      return (
                        dataToUpdate[key].length === values[key].length &&
                        dataToUpdate[key].every(
                          (item, index) => item === values[key][index]
                        )
                      );
                    }
                    return dataToUpdate[key] === values[key];
                  })
                : // If form values are not filled or have missing required fields
                  !(
                    values.title &&
                    values.startDate &&
                    values.endDate &&
                    values.company &&
                    values.salary &&
                    values.description &&
                    values.advantages.length > 0 &&
                    values.skills.length > 0
                  )
            }
          />
        </>
      )}
    </Formik>
  );
};

export default connect(null, mapDispatchToProps)(CreateJobOfferForm);

const styles = StyleSheet.create({
  currentOffersTitle: {
    marginTop: 19,
    marginBottom: 21,
    fontSize: 16,
  },
  dateTimePickersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTimePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.main_grey,
    borderRadius: 9,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 52,
    marginTop: 15,
    width: "49%",
  },
  dateTimePickerLabel: {
    marginLeft: 15,
    fontSize: 15,
    fontFamily: "Montserrat-medium",
    color: Colors.main_grey,
  },
  dateTimePicker: {
    color: Colors.primary_color,
    width: "60%",
    marginLeft: 4,
  },
  input: {
    marginTop: 15,
  },
  selectButton: {
    width: "100%",
    backgroundColor: "transparent",
    borderBottomColor: Colors.main_grey,
    borderBottomWidth: 2,
  },
  selectButtonText: {
    textAlign: "left",
    color: Colors.main_grey,
    fontFamily: "Montserrat-medium",
    fontSize: 15,
  },
  dropDown: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: Colors.main_grey,
    borderRadius: 9,
  },
  dropDownRow: {},
  dropDownRowText: {
    color: Colors.dark_grey,
    fontSize: 15,
    fontFamily: "Montserrat-medium",
  },
  descriptionInput: {
    marginTop: 15,
    textAlignVertical: "top",
    height: 200,
    alignItems: "flex-start",
  },
  descriptionInputText: {
    borderWidth: 1,
    borderColor: Colors.medium_grey,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 155,
    fontSize: 14,
  },
  error: {
    color: Colors.red,
    marginTop: 2,
    marginLeft: 21,
  },
  scrollContent: {},
});
