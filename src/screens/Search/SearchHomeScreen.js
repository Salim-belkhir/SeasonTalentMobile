import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  MainHeader,
  Typography,
  SearchJobOffer,
  Button,
  Icon,
} from "~/components";
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
          Historique des recherche
        </Typography>
        <Button
          label="Effacer"
          onPress={clear}
          hideIcon
          buttonStyle={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 0,
            paddingVertical: 0,
          }}
          labelTypographyStyle={{
            color: Colors.error_color,
            fontSize: 14,
          }}
        />
      </View>
      {searchHistory.length > 0 &&
        searchHistory.map((item, index) => (
          <View key={index} style={styles.tabContentTextContainer}>
            <Icon name="sync" size={24} color={Colors.main_grey} />
            <Typography type="l_medium" typographyStyle={styles.historyText}>
              {item}
            </Typography>
            <Icon name="close" size={24} color={Colors.main_grey} />
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
    marginTop: 70,
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
    borderBottomWidth: 1,
    borderColor: Colors.main_grey,
    flexWrap: "wrap",
    marginBottom: 10,
    paddingVertical: 10,
  },
  historyText: {
    color: Colors.main_grey,
    width: "80%",
  },
});
