import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import {
  BottomSheetFilters,
  Button,
  DefaultLayout,
  FlatList,
  Loading,
  MainHeader,
  NavigatorButton,
  SearchBar,
  Typography,
} from "~/components";
import { candidatesActions } from "~/redux/actions";
import { Colors } from "~/theme";

const mapStateToProps = (state) => ({
  candidates: state.candidates.candidates,
  matchedCandidates: state.candidates.filteredMatchedCandidatesToJobOffers,
  favoriteCandidates: state.candidates.favoriteCandidates,
  filteredCandidates: state.candidates.filteredCandidates,
});

const mapDispatchToProps = {
  fetchMatchingCandidates: candidatesActions.fetchMatchingCandidates,
  fetchFavoriteCandidates: candidatesActions.fetchFavoriteCandidates,
  addCandidateToFavorite: candidatesActions.addCandidateToFavorite,
  deleteCandidateFromFavorite: candidatesActions.deleteCandidateFromFavorite,
  filterCandidates: candidatesActions.filterCandidates,
};

const DEFAULT_FILTERS = {
  searchWord: {
    id: 1,
    label: "",
  },
  searchWords: [],
  startDate: moment().format("YYYY-MM-DD"), // set the date of today
  endDate: moment().add(1, "years").format("YYYY-MM-DD"),
  location: "",
};

const CandidatesScreen = ({
  route,
  candidates,
  matchedCandidates,
  fetchMatchingCandidates,
  addCandidateToFavorite,
  deleteCandidateFromFavorite,
  favoriteCandidates,
  fetchFavoriteCandidates,
  filterCandidates,
  filteredCandidates,
}) => {
  const navigation = useNavigation();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");
  const [filterBy, setFilterBy] = useState(DEFAULT_FILTERS);
  const [totalAppliedFilter, setTotalAppliedFilter] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [recommend, setRecommend] = useState(false);

  const recommendCandidates = () => {
    if (!recommend) {
      setRecommend(true);
      setSelectedTab("Candidats recommandés");
      setIsInitialLoading(true);
      setTimeout(() => {
        fetchMatchingCandidates();
        setIsInitialLoading(false);
      }, 1000);
    } else {
      setSelectedTab("Tous les candidats");
      setRecommend(false);
    }
  };

  const handleNavigateToFavoriteCandidates = () => {
    if (selectedTab === "favoris") {
      if (recommend) {
        setSelectedTab("Candidats recommandés");
        return;
      }
      setSelectedTab("Tous les candidats");
      return;
    }
    setSelectedTab("favoris");
    fetchFavoriteCandidates();
  };

  const handleNavigateToArchivedCandidates = () => {
    if (selectedTab === "archives") {
      if (recommend) {
        setSelectedTab("Candidats recommandés");
        return;
      }
      setSelectedTab("Tous les candidats");
      return;
    }
    setSelectedTab("archives");
  };

  const handleSearchCandidate = () => {};

  const handleNavigateToCandidateDetails = (item) => {
    navigation.navigate("CandidateDetails", { item, recommend });
  };

  const handleFavoriteCandidate = (item) => {
    if (item.isFavorite) {
      deleteCandidateFromFavorite(item.id);
    } else {
      addCandidateToFavorite(item.id);
    }
  };

  const closeFilter = () => {
    setShowFilter(false);
  };

  const onApplyFilters = (filter) => {
    setFilterBy(filter);
    setIsInitialLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      filterCandidates(filterBy);
      if (matchedCandidates.length !== 0) {
        fetchMatchingCandidates();
      }

      setIsInitialLoading(false);
    }, 1500);
  }, [filterBy]);

  useEffect(() => {
    setIsInitialLoading(true);
    setTimeout(() => {
      filterCandidates(filterBy);
      setIsInitialLoading(false);
    }, 1000);
  }, [candidates]);

  return (
    <DefaultLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainHeader navigation={navigation} />
          <View style={styles.searchContainer}>
            <SearchBar
              action={handleSearchCandidate}
              setShowFilter={setShowFilter}
              showFilterButton={true}
              searchType="Candidat"
            />
            <View style={styles.switchCandidatsTabsContainer}>
              <NavigatorButton
                label="Favoris"
                leftIcon="hearto"
                navigate={handleNavigateToFavoriteCandidates}
                buttonStyle={[
                  { marginRight: 10 },
                  selectedTab === "favoris" && {
                    backgroundColor: Colors.primary_color,
                  },
                ]}
                selected={selectedTab === "favoris"}
              />
              <NavigatorButton
                label="Archives"
                leftIcon="switcher"
                navigate={handleNavigateToArchivedCandidates}
                buttonStyle={[
                  selectedTab === "archives" && {
                    backgroundColor: Colors.primary_color,
                  },
                ]}
                selected={selectedTab === "archives"}
              />
            </View>
            <View style={styles.switchCandidatsTabsLabel}>
              <Typography
                type="l_bold"
                typographyStyle={styles.currentOffersTitle}
              >
                {selectedTab === "favoris"
                  ? "Candidats favoris"
                  : selectedTab === "archives"
                  ? "Candidats archivés"
                  : selectedTab === "Candidats recommandés"
                  ? "Candidats recommandés"
                  : "Tous les candidats"}
              </Typography>
              {selectedTab !== "favoris" && selectedTab !== "archives" && (
                <Button
                  label={recommend ? "Tous" : "Recommander"}
                  onPress={recommendCandidates}
                  hideIcon
                  buttonStyle={styles.recommendButton}
                  labelTypographyStyle={styles.recommendButtonLabel}
                />
              )}
            </View>
          </View>
        </View>
        <View style={styles.content}>
          {isInitialLoading ? (
            <Loading
              height={200}
              width={200}
              show={isInitialLoading}
              lottieStyle={styles.loadingContainer}
            />
          ) : (
            renderCandidatesList(
              selectedTab,
              filteredCandidates,
              candidates,
              favoriteCandidates,
              matchedCandidates,
              recommend,
              handleNavigateToCandidateDetails,
              handleFavoriteCandidate
            )
          )}
        </View>
        <BottomSheetFilters
          open={showFilter}
          onClose={closeFilter}
          onApplyFilters={onApplyFilters}
          onTotalFilterAppliedChange={(total) => {
            setTotalAppliedFilter(total);
          }}
          type="candidates"
          defaultFilters={filterBy}
        />
      </View>
    </DefaultLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
  currentOffersTitle: {
    fontSize: 16,
  },
  header: {
    paddingHorizontal: 23,
    backgroundColor: Colors.pure_white,
    paddingBottom: 10,
  },

  switchCandidatsTabsContainer: {
    flexDirection: "row",
  },
  switchCandidatsTabsLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13,
  },
  recommendButton: {
    backgroundColor: Colors.input_gray,
    paddingHorizontal: 10,
    height: 30,
    borderWidth: 0,
  },
  recommendButtonLabel: {
    color: Colors.primary_color,
  },
  candidatesList: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 19,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  content: {
    flex: 1,
  },
});

const renderCandidatesList = (
  selectedTab,
  filteredCandidates,
  candidates,
  favoriteCandidates,
  matchedCandidates,
  recommend,
  handleNavigateToCandidateDetails,
  handleFavoriteCandidate
) => {
  let items = filteredCandidates;
  if (selectedTab === "favoris") {
    items = favoriteCandidates;
  } else if (selectedTab === "archives") {
    items = candidates.filter(
      (candidate) => candidate.experiences.length !== 0
    );
  } else if (selectedTab === "Candidats recommandés") {
    items = matchedCandidates;
  }
  return (
    <>
      {items.length === 0 ? (
        <Typography
          type="l_medium"
          typographyStyle={{
            paddingLeft: 20,
            color: Colors.main_grey,
            paddingTop: 20,
          }}
        >
          Aucun candidat trouvé
        </Typography>
      ) : (
        <FlatList
          key={selectedTab}
          items={items}
          type={
            selectedTab === "favoris" ||
            selectedTab === "archives" ||
            !recommend ||
            selectedTab === "Tous les candidats" ||
            selectedTab === ""
              ? "candidates"
              : "matchedCandidates"
          }
          onPressedItem={handleNavigateToCandidateDetails}
          listStyle={styles.candidatesList}
          onPressFavorite={handleFavoriteCandidate}
        />
      )}
    </>
  );
};
