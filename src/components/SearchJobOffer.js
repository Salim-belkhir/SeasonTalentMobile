import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "./Button";
import Icon from "./Icon";
import TextInput from "./TextInput";

const SearchJobOffer = ({
  setSearchHistory,
  action,
  setSearch,
  searchResults,
}) => {
  const navigation = useNavigation();
  const handleSubmit = (values, { resetForm }) => {
    if (values.search === "") {
      return;
    }
    setSearchHistory((history) => [values.search, ...history]);
    resetForm({ values: { search: "" } });
    setSearch("");
    navigation.navigate("SearchResults", {
      searchValue: values.search,
      results: searchResults ,
    });
  };

  return (
    <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Rechercher une offre"
            leftIcon="search1"
            onChangeText={(Text) => {
              handleChange("search")(Text);
              setSearch(Text);
            }}
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
    marginTop: 16,
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  textInput: {
    width: "85%",
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
    height: 48,
    borderRadius: 12,
  },
  button: {
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
    width: "13%",
  },
});
