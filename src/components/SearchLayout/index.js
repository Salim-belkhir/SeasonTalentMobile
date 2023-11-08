import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Colors } from "~/theme";
import SearchHeader from "./SearchHeader";
import SearchHistory from "./SearchHistory";
import SearchSuggestion from "./SearchSuggestion";

const mapStateToProps = (state) => ({
  jobOffers: state.jobOffers.jobOffers,
});

const SearchLayout = ({ jobOffers }) => {
  // get the initial param
  const [search, setSearch] = useState("");
  const [suggestedJobOffers, setSuggestedJobOffers] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [consultedOffers, setConsultedOffers] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("searchHistory").then((history) => {
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    });
    AsyncStorage.getItem("consultedOffers").then((offers) => {
      if (offers) {
        setConsultedOffers(JSON.parse(offers));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    AsyncStorage.setItem("consultedOffers", JSON.stringify(consultedOffers));
  }, [consultedOffers]);

  return (
    <View style={styles.container}>
      <SearchHeader
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
        setSearch={setSearch}
        setSuggestedJobOffers={setSuggestedJobOffers}
        jobOffers={jobOffers}
        searchResults={suggestedJobOffers}
      />
      {suggestedJobOffers.length === 0 && search === "" ? (
        <SearchHistory
          setSearchHistory={setSearchHistory}
          searchHistory={searchHistory}
          setSearch={setSearch}
          consultedOffers={consultedOffers}
          setConsultedOffers={setConsultedOffers}
        />
      ) : (
        <SearchSuggestion
          search={search}
          suggestedJobOffers={suggestedJobOffers}
        />
      )}
    </View>
  );
};

export default connect(mapStateToProps)(SearchLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: Colors.main_white,
  },
});
