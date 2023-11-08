import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import MainHeader from "../MainHeader";
import SearchJobOffer from "../SearchJobOffer";
import Typography from "../Typography";

const SearchHeader = ({
  setSearchHistory,
  setSearch,
  setSuggestedJobOffers,
  jobOffers,
  searchResults,
}) => {
  const navigation = useNavigation();
  const [showLottie, setShowLottie] = useState(false);
  const [resultsReady, setResultsReady] = useState(false);

  const handleSearch = _.debounce((text) => {
    setSearch(text);
    if (text) {
      setShowLottie(true);
      const matchingJobOffers = jobOffers.filter((jobOffer) =>
        jobOffer.title.toLowerCase().includes(text.toLowerCase())
      );
      const sortedJobOffers = matchingJobOffers
        .sort((a, b) => b.title.length - a.title.length)
        .slice(0, 5);
      // use a timeout to show the lottie animation
      setTimeout(() => {
        setShowLottie(false);
        setSuggestedJobOffers(sortedJobOffers);
        setResultsReady(true);
      }, 500);
    } else {
      setSuggestedJobOffers([]);
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
      <SearchJobOffer
        setSearchHistory={setSearchHistory}
        setSearch={handleSearch}
        searchResults={searchResults}
        resultsReady={resultsReady}
        setSearchReady={setResultsReady}
      />
      {showLottie && (
        <LottieView
          source={require("~/assets/lotties/loading-dots.json")}
          autoPlay
          loop
          style={styles.lottie}
          resizeMode="cover"
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
    width: 100,
    height: 50,
    alignSelf: "center",
    resizeMode: "cover",
  },
});
