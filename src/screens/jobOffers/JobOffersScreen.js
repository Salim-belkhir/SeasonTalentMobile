import React, { useEffect, useState } from "react";
import { FlatList, SearchJobOffer, Typography } from "~/components";
import DefaultLayout from "~/components/DefaultLayout";
import MainHeader from "~/components/MainHeader";
import NavigatorButton from "~/components/NavigatorButton";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Colors } from "~/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const mapStateToProps = (state) => ({
  jobOffers: state.jobOffers.jobOffers,
});

const JobOffersScreen = ({ navigation, jobOffers }) => {
  const [isSearching, setIsSearching] = useState(false);
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

  const header = !isSearching ? (
    <MainHeader navigation={navigation} />
  ) : (
    <MainHeader.exitOnly
      headerStyle={styles.headerStyle}
      goBackButtonStyle={styles.goBackButton}
      onPress={() => setIsSearching(false)}
    >
      <Typography type="l_bold" typographyStyle={styles.headerTitle}>
        Recherche
      </Typography>
    </MainHeader.exitOnly>
  );

  const currentOffersTitle = !isSearching
    ? "Offres d'emploi actuelles"
    : "Historique des recherches";

  const recentlyViewedTitle = "Récemmment consultés";

  return (
    <DefaultLayout navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}>
          {header}
          <SearchJobOffer
            setIsSearching={setIsSearching}
            setSearchHistory={setSearchHistory}
          />
          {!isSearching && (
            <NavigatorButton
              label="Créer une offre d'emploi"
              leftIcon="plus"
              navigate={() => navigation.push("EmploisAjouter")}
            />
          )}
          <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
            {currentOffersTitle}
          </Typography>
        </View>
        {!isSearching ? (
          <FlatList
            items={jobOffers}
            type="horizontalList"
            onPressedItem={(item) =>
              navigation.navigate("EmploisDetails", { item })
            }
          />
        ) : (
          searchHistory.length > 0 &&
          searchHistory.map((item, index) => (
            <View key={index} style={styles.tabContentTextContainer}>
              <Typography type="l_medium">{item}</Typography>
            </View>
          ))
        )}
        {isSearching && (
          <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
            {recentlyViewedTitle}
          </Typography>
        )}
      </View>
    </DefaultLayout>
  );
};

export default connect(mapStateToProps)(JobOffersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: Colors.main_white,
  },
  currentOffersTitle: {
    marginTop: 19,
    marginBottom: 21,
    fontSize: 16,
  },
  headerStyle: {
    marginTop: 65,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    alignSelf: "center",
  },
  goBackButton: {},
});
