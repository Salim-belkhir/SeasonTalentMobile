import React from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import {
  MainHeader,
  Typography,
  DefaultLayout,
  TextInput,
  FlatList,
  Button,
} from "~/components";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "~/components/Icon";
import { Colors } from "~/theme";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import SelectDropdown from "react-native-select-dropdown";

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
  salary: Yup.number()
    .typeError("Le salaire doit etre un chiffre")
    .required("Requis"),
  description: Yup.string().required("Requis"),
});

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

const etablissementList = [
  {
    id: 1,
    label: "Etablissement 1",
    value: "etablissement1",
  },
  {
    id: 2,
    label: "Etablissement 2",
    value: "etablissement2",
  },
  {
    id: 3,
    label: "Etablissement 3",
    value: "etablissement3",
  },
];

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
            <View style={styles.formContainer}>
              {/* let's create a textIn */}
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

              <View style={styles.dateTimePickersContainer}>
                <View style={styles.dateTimePickerContainer}>
                  <Icon name="calendar" size={20} color={Colors.main_grey} />
                  <Typography
                    type="l_regular"
                    typographyStyle={styles.dateTimePickerLabel}
                  >
                    Du :
                  </Typography>
                  <RNDateTimePicker
                    value={values.startDate || new Date()}
                    onChange={(event, selectedDate) => {
                      setFieldValue("startDate", selectedDate);
                    }}
                    style={styles.dateTimePicker}
                  />
                </View>

                <View style={styles.dateTimePickerContainer}>
                  <Icon name="calendar" size={20} color={Colors.main_grey} />
                  <Typography
                    type="l_regular"
                    typographyStyle={styles.dateTimePickerLabel}
                  >
                    Au :
                  </Typography>
                  <RNDateTimePicker
                    value={values.startDate || new Date()}
                    onChange={(event, selectedDate) => {
                      setFieldValue("endDate", selectedDate);
                    }}
                    style={styles.dateTimePicker}
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
                      color={Colors.main_grey}
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
                buttonStyle={styles.selectButton}
                buttonTextStyle={styles.selectButtonText}
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
                listStyle={[
                  { marginTop: values.advantages.length > 0 ? 15 : 0 },
                ]}
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
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Enter") {
                    Keyboard.dismiss();
                  }
                }}
                inputStyle={styles.descriptionInput}
                inputTextStyle={styles.descriptionInputText}
              />

              <Button
                label="Créer"
                hideIcon
                onPress={handleSubmit}
                buttonStyle={{
                  marginTop: 15,
                  backgroundColor: Colors.main_white,
                }}
                labelTypographyStyle={{ color: Colors.main_white }}
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
            </View>
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
  formContainer: {},
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
    //   marginTop: 15,
    //   borderWidth: 1,
    //   borderColor: Colors.main_grey,
    //   borderRadius: 9,
    //   paddingHorizontal: 16,
    //   paddingVertical: 8,
    //   height: 52,
    // //
    marginTop: 15,
    width: "100%",
    backgroundColor: "transparent",
    borderBottomColor: Colors.main_grey,
    borderBottomWidth: 2,
  },
  selectButtonText: {
    textAlign: "left",
    color: Colors.main_grey,
  },
  dropDown: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: Colors.main_grey,
    borderRadius: 9,
  },
  dropDownRow: {
    // color: Colors.primary_color,
  },
  dropDownRowText: {
    // color: Colors.main_grey,
    // fontSize: 15,
    // fontFamily: "Montserrat-medium",
  },
  descriptionInput: {
    marginTop: 15,
    textAlignVertical: "top",
  },
  descriptionInputText: {},
});
