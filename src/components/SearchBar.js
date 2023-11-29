import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "./Button";
import Icon from "./Icon";
import AlertModal from "./Modal";
import TextInput from "./TextInput";

const initialValues = {
  search: "",
};

const SearchBar = ({
  searchHistory,
  setSearchHistory,
  action,
  setSearch,
  resultsReady,
  setShowFilter,
  showFilterButton,
  search,
  searchType,
}) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (values) => {
    if (values.search === "") {
      return;
    }
    if (resultsReady) {
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
        searchType: searchType,
      });
    } else {
      setShowModal(true);
    }
  };

  const initialFormValues = search !== "" ? { search: search } : initialValues;

  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    if (search !== "") {
      setFormValues({ search: search });
    }
  }, [search]);

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
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
            placeholder={`Rechercher un ${searchType}`}
            leftIcon="search1"
            onChangeText={(Text) => {
              handleChange("search")(Text);
              setSearch(Text);
            }}
            onBlur={handleBlur("search")}
            onFocus={action}
            value={
              values.search !== "" && values.search !== undefined
                ? values.search
                : ""
            }
            inputStyle={styles.textInput}
            onSubmitEditing={handleSubmit}
            returnKeyType="search"
          />
          {showFilterButton && (
            <Button
              hideIcon
              buttonStyle={styles.button}
              onPress={() => setShowFilter(true)}
            >
              <Icon name="filter" size={24} color={Colors.primary_color} />
            </Button>
          )}
        </View>
      )}
    </Formik>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
    height: 48,
    borderRadius: 12,
  },
  button: {
    marginLeft: 10,
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
  },
});
