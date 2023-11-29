import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";
import Loading from "../Loading";
import SearchResultsContent from "./SearchResultsContent";
import SearchResultsHeader from "./SearchResultsHeader";

const mapStateToProps = (state) => ({
  filteredJobOffers: state.jobOffers.filteredSearchedJobOffers,
});

const mapDispatchToProps = {
  filterResultsJobOffers: jobOfferActions.filterResultsJobOffers,
};

const DEFAULT_FILTERS = {
  searchWords: [],
  startDate: moment().add(-1, "years").format("YYYY-MM-DD"),
  endDate: moment().add(1, "years").format("YYYY-MM-DD"),
  minSalary: 750,
  maxSalary: 1750,
};

const SearchResultsLayout = ({
  searchResults,
  filteredJobOffers,
  filterResultsJobOffers,
}) => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [filterBy, setFilterBy] = useState();

  const refetchWithFilter = useCallback(() => {
    // we need to set up a default filter because when the first time that the job offers screen is rendered,
    // the filterBy state is not yet set
    const filters = filterBy || DEFAULT_FILTERS;
    filterResultsJobOffers(filters);
  }, [filterBy]);

  useEffect(() => {
    refetchWithFilter();
    setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);
  }, [refetchWithFilter]);

  return (
    <View style={styles.container}>
      <SearchResultsHeader
        searchTitle={searchResults.searchValue}
        nbResults={filteredJobOffers.length}
      />
      {isInitialLoading ? (
        <Loading
          height={200}
          width={200}
          show={isInitialLoading}
          lottieStyle={styles.loadingContainer}
        />
      ) : (
        <SearchResultsContent results={filteredJobOffers} />
      )}
    </View>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
  loadingContainer: {},
});
