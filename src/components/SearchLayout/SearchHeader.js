import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import { StyleSheet } from "react-native";
import MainHeader from "../MainHeader";
import SearchJobOffer from "../SearchJobOffer";
import Typography from "../Typography";
// import LottieView from "lottie-react-native";

const SearchHeader = ({
  setSearchHistory,
  setSearch,
  setSuggestedJobOffers,
  jobOffers,
  searchResults,
}) => {
  const navigation = useNavigation();
  // const [showLottie, setShowLottie] = useState(false);

  const handleSearch = _.debounce((text) => {
    // setShowLottie(true);
    setSearch(text);
    if (text) {
      const matchingJobOffers = jobOffers.filter((jobOffer) =>
        jobOffer.title.toLowerCase().includes(text.toLowerCase())
      );
      const sortedJobOffers = matchingJobOffers
        .sort((a, b) => b.title.length - a.title.length)
        .slice(0, 5);
      setSuggestedJobOffers(sortedJobOffers);
    } else {
      setSuggestedJobOffers([]);
    }
    // setShowLottie(false);
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
      />
      {/* {showLottie && (
        <LottieView
          source={require("~/assets/lotties/loading-dots.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
      )} */}
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
  // lottie: {
  //   height: 100,
  //   backgroundColor: "#fff",
  // },
});
