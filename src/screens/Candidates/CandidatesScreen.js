import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import {
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
  matchedCandidates: state.candidates.matchedCandidatesToJobOffers,
  favoriteCandidates: state.candidates.favoriteCandidates,
});

const mapDispatchToProps = {
  fetchMatchingCandidates: candidatesActions.fetchMatchingCandidates,
  fetchFavoriteCandidates: candidatesActions.fetchFavoriteCandidates,
  addCandidateToFavorite: candidatesActions.addCandidateToFavorite,
  deleteCandidateFromFavorite: candidatesActions.deleteCandidateFromFavorite,
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
}) => {
  const navigation = useNavigation();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");
  const [filterBy, setFilterBy] = useState();
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

  const handleSearchCandidate = () => {
    navigation.push("CandidatsRecherche");
  };

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
  };

  const closeFilter = () => {
    setShowFilter(false);
  };

  const handleNavigateToCandidateDetails = (item) => {
    navigation.navigate("CandidatsDetails", { item });
  };

  const handleFavoriteCandidate = (item) => {
    if (item.isFavorite) {
      deleteCandidateFromFavorite(item.id);
    } else {
      addCandidateToFavorite(item.id);
    }
  };

  const renderCandidatesList = () => {
    let items = candidates;
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
    );
  };

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
            renderCandidatesList()
          )}
        </View>
        {/* <BottomSheetFilters
          defaultFilters={filterBy}
          open={showFilter}
          onClose={closeFilter}
          onApplyFilter={handleFilterChange}
          onTotalFilterAppliedChange={(total) => {
            setTotalAppliedFilter(total);
          }}
        /> */}
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
