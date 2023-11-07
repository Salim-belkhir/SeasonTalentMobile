import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import { highlightSearchText, renderItems } from "~/utils";
import Button from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

const searchHistory = ({ search, setSearchHistory, searchHistory }) => {
  const navigation = useNavigation();

  const clear = () => {
    setSearchHistory([]);
  };

  const renderSearchHistory = () => {
    return renderItems(searchHistory.slice(0, 3), (item, index) => (
      <View key={index} style={styles.tabContentTextContainer}>
        <Icon name="sync" size={24} color={Colors.main_grey} />
        <Typography type="l_medium" typographyStyle={styles.historyText}>
          {highlightSearchText(item, search)}
        </Typography>
        <Button
          hideIcon
          buttonStyle={styles.clearButton}
          onPress={() => {
            setSearchHistory((history) =>
              history.filter((historyItem) => historyItem !== item)
            );
          }}
        >
          <Icon name="close" size={24} color={Colors.main_grey} />
        </Button>
      </View>
    ));
  };

  return (
    <>
      <View style={styles.historyContainer}>
        <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
          Historique des recherche
        </Typography>
        <Button
          label="Effacer"
          onPress={clear}
          hideIcon
          buttonStyle={styles.clearButton}
          labelTypographyStyle={styles.clearButtonText}
        />
      </View>
      {searchHistory.length > 0 && renderSearchHistory()}
      <View style={styles.consultedContainer}>
        <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
          Récemmment consultés
        </Typography>
      </View>
    </>
  );
};

export default searchHistory;

const styles = StyleSheet.create({
  historyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  currentOffersTitle: {
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
  },
  historyText: {
    color: Colors.main_grey,
    width: "75%",
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  clearButtonText: {
    color: Colors.error_color,
    fontSize: 15,
  },

  consultedContainer: {
    marginTop: 16,
  },
});
