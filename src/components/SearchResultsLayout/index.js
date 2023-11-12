import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Colors } from "~/theme";
import SearchResultsContent from "./SearchResultsContent";
import SearchResultsHeader from "./SearchResultsHeader";

const mapStateToProps = (state) => ({
  searchedJobOffers: state.jobOffers.searchedJobOffers,
});

const SearchResultsLayout = ({ searchResults, searchedJobOffers }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [filterBy, setFilterBy] = useState();
  const [totalAppliedFilter, setTotalAppliedFilter] = useState(0);

  const closeFilter = () => {
    setShowFilter(false);
  };

  return (
    <View style={styles.container}>
      <SearchResultsHeader
        searchTitle={searchResults.searchValue}
        nbResults={searchedJobOffers.length}
        setShowFilter={setShowFilter}
      />
      <SearchResultsContent results={searchedJobOffers} />
    </View>
  );
};

export default connect(mapStateToProps)(SearchResultsLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
});
