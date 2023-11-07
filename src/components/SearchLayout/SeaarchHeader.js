import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MainHeader from "../MainHeader";
import SearchJobOffer from "../SearchJobOffer";
import Typography from "../Typography";
import _ from "lodash";

const SearchHeader = ({
  setSearchHistory,
  setSearch,
  setSuggestedJobOffers,
  jobOffers,
}) => {
  const navigation = useNavigation();
  const handleSearch = _.debounce((text) => {
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
      />
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
});
