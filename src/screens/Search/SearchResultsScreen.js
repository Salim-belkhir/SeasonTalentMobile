import { StyleSheet } from "react-native";
import SearchResultsLayout from "../../components/SearchResultsLayout";

const SearchResults = ({ route }) => {
  return <SearchResultsLayout searchResults={route.params} />;
};

export default SearchResults;

const styles = StyleSheet.create({});
