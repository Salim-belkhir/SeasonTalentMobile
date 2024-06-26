import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";
import SearchHeader from "./SearchHeader";
import SearchHistory from "./SearchHistory";
import SearchSuggestion from "./SearchSuggestion";

const mapStateToProps = (state) => ({
  searchedJobOffers: state.jobOffers.searchedJobOffers,
});

const mapDispatchToProps = {
  searchJobOffer: jobOfferActions.searchJobOffer,
};

const SearchLayout = ({ searchedJobOffers, searchJobOffer }) => {
  // get the initial param
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("searchHistory").then((history) => {
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    if (search === "") {
      searchJobOffer(search);
    }
  }, []);

  return (
    <View style={styles.container}>
      <SearchHeader
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
        setSearch={setSearch}
        search={search}
        setSuggestedJobOffers={searchJobOffer}
      />
      {searchedJobOffers.length === 0 && search === "" ? (
        <SearchHistory
          setSearchHistory={setSearchHistory}
          searchHistory={searchHistory}
          setSearch={setSearch}
        />
      ) : (
        <SearchSuggestion
          search={search}
          suggestedJobOffers={searchedJobOffers}
        />
      )}
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: Colors.main_white,
  },
});
