import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { MainHeader, Typography, SearchJobOffer, Button } from "~/components";
import { Colors } from "~/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SearchHome = ({ navigation, route }) => {
  // get the initial param
  const { type } = route.params;
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

  const clear = () => {
    setSearchHistory([]);
  };

  return (
    <View style={styles.container}>
      <MainHeader.exitOnly
        headerStyle={styles.headerStyle}
        goBackButtonStyle={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <Typography type="l_bold" typographyStyle={styles.headerTitle}>
          Recherche
        </Typography>
      </MainHeader.exitOnly>
      <SearchJobOffer setSearchHistory={setSearchHistory} />
      <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
        Historique des recherche
      </Typography>
      <Button
        label="Effacer l'historique"
        onPress={clear}
        hideIcon
        buttonStyle={{ marginBottom: 35 }}
      />
      {searchHistory.length > 0 &&
        searchHistory.map((item, index) => (
          <View key={index} style={styles.tabContentTextContainer}>
            <Typography type="l_medium">{item}</Typography>
          </View>
        ))}
      <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
        Récemmment consultés
      </Typography>
    </View>
  );
};

export default SearchHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: Colors.main_white,
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
  currentOffersTitle: {
    marginTop: 19,
    marginBottom: 21,
    fontSize: 16,
    lineHeight: 19,
    color: Colors.main_black,
  },
  tabContentTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.main_white,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: Colors.main_grey,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 52,
    marginBottom: 10,
  },
});
