import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import SearchResultsContent from "./SearchResultsContent";
import SearchResultsHeader from "./SearchResultsHeader";

const SearchResultsLayout = ({ searchResults }) => {
  return (
    <View style={styles.container}>
      <SearchResultsHeader
        searchTitle={searchResults.searchValue}
        nbResults={searchResults.results.length}
      />
      <SearchResultsContent results={searchResults.results} />
    </View>
  );
};

export default SearchResultsLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
});
