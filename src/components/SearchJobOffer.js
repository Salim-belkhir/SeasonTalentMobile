import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TextInput from "./TextInput";
import { Formik } from "formik";
import Button from "./Button";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "~/theme";

const SearchJobOffer = ({ setSearchHistory, action }) => {
  const navigation = useNavigation();
  const handleSubmit = (values, { resetForm }) => {
    setSearchHistory((history) => [values.search, ...history]);
    resetForm({ values: { search: "" } });
  };

  return (
    <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Rechercher une offre"
            leftIcon="search1"
            onChangeText={handleChange("search")}
            onBlur={handleBlur("search")}
            onFocus={action}
            value={values.search}
            inputStyle={styles.textInput}
            onSubmitEditing={handleSubmit}
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
    marginTop: 16,
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
