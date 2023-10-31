import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Platform } from "react-native";
import { Typography, TextInput, FlatList, Button } from "~/components";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "~/components/Icon";
import { Colors } from "~/theme";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { jobOfferActions } from "~/redux/actions";

// Define mapDispatchToProps to connect createJobOffer action to the component
const mapDispatchToProps = {
  createJobOffer: jobOfferActions.createJobOffer,
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
  place: "",
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
const CreateJobOfferForm = ({ createJobOffer }) => {
  const navigation = useNavigation();

  /**
   * Handles the submission of the form.
   *
   * @param {Object} values - The form values.
   */
  const handleCreateJobOffer = (values) => {
    // add a field logo with a random logo from internet
    createJobOffer({
      ...values,
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      // format the date to be like this : "01 Janvier - 31 Janvier"
      duration: `${values.startDate.toLocaleString("default", {
        month: "long",
        day: "numeric",
      })} - ${values.endDate.toLocaleString("default", {
        month: "long",
        day: "numeric",
      })}`,
      location: etablissementList.find(
        (etablissement) => etablissement.value === values.place
      ).location,
    });
    navigation.navigate("EmploisHome");
  };

  // Define the props for the Formik component
  const formikProps = {
    initialValues: initialValues,
    validationSchema,
    onSubmit: handleCreateJobOffer,
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
                  value={values.startDate || new Date()}
                  onChange={(event, selectedDate) => {
                    setFieldValue("startDate", selectedDate);
                  }}
                  style={styles.dateTimePicker}
                  textColor={Colors.primary_color}
                  accentColor={Colors.primary_color}
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
                  value={values.startDate || new Date()}
                  onChange={(event, selectedDate) => {
                    setFieldValue("endDate", selectedDate);
                  }}
                  style={styles.dateTimePicker}
                  textColor={Colors.primary_color}
                  accentColor={Colors.primary_color}
                />
              </View>
            </View>

            <SelectDropdown
              data={etablissementList}
              onSelect={(selectedItem, index) => {
                setFieldValue("place", selectedItem.value);
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
                      values.place ? Colors.primary_color : Colors.main_grey
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
                values.place && { borderBottomColor: Colors.primary_color },
              ]}
              buttonTextStyle={[
                styles.selectButtonText,
                values.place && { color: Colors.primary_color },
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
              leftIcon="pluscircleo"
              placeholder="Avantages"
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
              leftIcon="pluscircleo"
              placeholder="Compétences"
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
            label="Créer"
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
              !(
                values.title &&
                values.startDate &&
                values.endDate &&
                values.place &&
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
