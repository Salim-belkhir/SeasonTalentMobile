import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  DefaultLayout,
  MainHeader,
  NavigatorButton,
  SearchBar,
  Typography,
} from "~/components";
import { Colors } from "~/theme";

const CandidatesScreen = ({ route }) => {
  const navigation = useNavigation();
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  const handleNavigateToFavoriteCandidates = () => {
    if (selectedTab === "favoris") {
      setSelectedTab("");
      return;
    }
    setSelectedTab("favoris");
  };

  const handleNavigateToArchivedCandidates = () => {
    if (selectedTab === "archives") {
      setSelectedTab("");
      return;
    }
    setSelectedTab("archives");
  };

  const handleSearchCandidate = () => {
    navigation.push("CandidatsRecherche");
  };
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainHeader navigation={navigation} />
          <View style={styles.searchContainer}>
            {/* <SearchBar
              placeholder="Rechercher un candidat"
              onPress={handleSearchCandidate}
            /> */}
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
            <Typography
              type="l_bold"
              typographyStyle={styles.currentOffersTitle}
            >
              {selectedTab === "favoris"
                ? "Candidats favoris"
                : selectedTab === "archives"
                ? "Candidats archivés"
                : "Candidats recommandés"}
            </Typography>
          </View>
        </View>
        {/* <View style={styles.content}>
          {isInitialLoading ? (
            <Loader />
          ) : (
            <FlatList
              data={candidates}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyList text="Aucun candidat trouvé" />}
            />
          )}
        </View> */}
      </View>
    </DefaultLayout>
  );
};

export default CandidatesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
  currentOffersTitle: {
    marginTop: 19,
    fontSize: 16,
  },
  header: {
    paddingHorizontal: 23,
    paddingBottom: 15,
    backgroundColor: Colors.pure_white,
  },

  switchCandidatsTabsContainer: {
    flexDirection: "row",
  },
  jobOffersList: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 19,
  },
  jobOfferItem: {
    borderRadius: 12,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
});
