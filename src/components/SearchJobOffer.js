import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "./Button";
import Icon from "./Icon";
import AlertModal from "./Modal";
import TextInput from "./TextInput";

const SearchJobOffer = ({
  searchHistory,
  setSearchHistory,
  action,
  setSearch,
  searchResults,
  resultsReady,
  setSearchReady,
  setShowFilter,
}) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (values, { resetForm }) => {
    if (values.search === "") {
      return;
    }
    resetForm({ values: { search: "" } });
    setSearch("");
    if (resultsReady) {
      //check before if the search is already in the history
      if (!searchHistory.includes(values.search)) {
        setSearchHistory((history) => [values.search, ...history]);
      } else {
        setSearchHistory((history) => [
          values.search,
          ...history.filter((historyItem) => historyItem !== values.search),
        ]);
      }
      navigation.navigate("SearchResults", {
        searchValue: values.search,
        results: searchResults,
      });
    } else {
      setShowModal(true);
    }
  };

  return (
    <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          {showModal && (
            <AlertModal
              title="Aucun résultat"
              message="Attention, il faut attendre que les résultats soient prêts avant de valider la recherche."
              onClose={() => setShowModal(false)}
              type="warning"
            />
          )}
          <TextInput
            placeholder="Rechercher une offre"
            leftIcon="search1"
            onChangeText={(Text) => {
              handleChange("search")(Text);
              setSearch(Text);
              setSearchReady(false);
            }}
            onBlur={handleBlur("search")}
            onFocus={action}
            value={values.search}
            inputStyle={styles.textInput}
            onSubmitEditing={handleSubmit}
            // disable the return key on the keyboard until the results are ready
            returnKeyType="search"
          />
          <Button
            hideIcon
            buttonStyle={styles.button}
            onPress={() => setShowFilter(true)}
          >
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
