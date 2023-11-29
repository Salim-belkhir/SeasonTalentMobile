import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { searchJobOffer } from "~/redux/actions/jobOfferActions";
import Loading from "../Loading";
import MainHeader from "../MainHeader";
import SearchBar from "../SearchBar";
import Typography from "../Typography";

const SearchHeader = ({
  setSearchHistory,
  setSearch,
  setSuggestedJobOffers,
  searchHistory,
  search,
}) => {
  const navigation = useNavigation();
  const [showLottie, setShowLottie] = useState(false);
  const [resultsReady, setResultsReady] = useState(false);

  const handleSearch = _.debounce((text) => {
    setResultsReady(false);
    setSuggestedJobOffers("");
    setSearch(text);
    if (text) {
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
        setSuggestedJobOffers(text);
        setResultsReady(true);
      }, 600);
    } else {
      searchJobOffer("");
      setResultsReady(false);
    }
  }, 500);

  return (
    <>
      <MainHeader.exitOnly
        headerStyle={styles.headerStyle}
        goBackButtonStyle={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <Typography type="l_bold" typographyStyle={styles.headerTitle}>
          Recherche
        </Typography>
      </MainHeader.exitOnly>
      <SearchBar
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
        setSearch={handleSearch}
        search={search}
        resultsReady={resultsReady}
        setSearchReady={setResultsReady}
        showFilterButton={false}
        searchType={"emploi"}
      />
      {showLottie && (
        <Loading
          height={100}
          width={100}
          show={showLottie}
          lottieStyle={styles.lottie}
        />
      )}
    </>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {},
  headerStyle: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    alignSelf: "center",
  },
  lottie: {
    justifyContent: "flex-start",
    paddingTop: 26,
  },
});
