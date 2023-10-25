import React from "react";
import { View, StyleSheet } from "react-native";
import TextInput from "./TextInput";
import { Formik } from "formik";
import Button from "./Button";
import Icon from "./Icon";
import { Colors } from "~/theme";

const SearchJobOffer = () => {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Rechercher une offre"
            leftIcon="search1"
            onChangeText={handleChange("search")}
            onBlur={handleBlur("search")}
            value={values.search}
            inputStyle={styles.textInput}
          />
          <Button hideIcon buttonStyle={styles.button}>
            <Icon name="filter" size={24} color={Colors.primary_color} />
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default SearchJobOffer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 19,
  },
  textInput: {
    height: 48,
    width: 300,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
  },
  button: {
    width: 60,
    height: 48,
    marginLeft: 8,
    borderRadius: 12,
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
  },
});
