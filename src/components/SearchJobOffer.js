import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
            style={styles.textInput}
          />
          <Button hideIcon buttonStyle={styles.button}>
            <Icon name="filter" size={20} color={Colors.primary_color} />
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default SearchJobOffer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 21,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: "65%",
  },
  button: {
    width: "20%",
    backgroundColor: Colors.input_gray,
    borderColor: Colors.input_gray,
  },
});
