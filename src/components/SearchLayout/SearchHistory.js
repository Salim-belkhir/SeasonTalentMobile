import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";
import { renderItems } from "~/utils";
import Button from "../Button";
import FlatList from "../FlatList";
import Icon from "../Icon";
import Typography from "../Typography";

const mapDispatchToProps = {
  searchJobOffer: jobOfferActions.searchJobOffer,
  loadRecentlyConsultedJobOffers:
    jobOfferActions.loadRecentlyConsultedJobOffers,
};

const mapStateToProps = (state) => ({
  searchedJobOffers: state.jobOffers.searchedJobOffers,
  consultedOffers: state.jobOffers.recentlyConsultedJobOffers,
});

const SearchHistory = ({
  setSearchHistory,
  searchHistory,
  searchJobOffer,
  searchedJobOffers,
  consultedOffers,
  loadRecentlyConsultedJobOffers,
  setSearch,
}) => {
  const navigation = useNavigation();
  const [historyToSearch, setHistoryToSearch] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("consultedOffers").then((offers) => {
      if (offers) {
        loadRecentlyConsultedJobOffers(JSON.parse(offers));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("consultedOffers", JSON.stringify(consultedOffers));
  }, [consultedOffers]);

  const clear = () => {
    setSearchHistory([]);
  };

  const clearCurrentOffers = () => {
    loadRecentlyConsultedJobOffers([]);
  };

  const handleNavigateToJobOfferDetails = (item) => {
    navigation.navigate("EmploisDetails", { item });
  };

  const handleHistoryItemPress = (item) => {
    setSearchHistory((history) =>
      !history.includes(item)
        ? [item, ...history]
        : [item, ...history.filter((historyItem) => historyItem !== item)]
    );
    setSearch(item);
    searchJobOffer(item);
    navigation.navigate("SearchResults", {
      searchValue: item,
    });
  };

  const renderSearchHistoryItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.tabContentTextContainer}
      onPress={() => handleHistoryItemPress(item)}
    >
      <Icon name="sync" size={24} color={Colors.main_grey} />
      <Typography type="l_medium" typographyStyle={styles.historyText}>
        {item}
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
    </TouchableOpacity>
  );

  const renderSearchHistory = () =>
    renderItems(searchHistory.slice(0, 3), renderSearchHistoryItem);

  const renderConsultedOffers = () => (
    <FlatList
      items={consultedOffers}
      onPressedItem={handleNavigateToJobOfferDetails}
      listStyle={styles.consultedOffersList}
    />
  );

  const renderNoHistoryText = (text) => (
    <Typography type="l_medium" typographyStyle={styles.noHistoryText}>
      {text}
    </Typography>
  );

  const renderHistoryContainer = (title, onPress) => (
    <View style={styles.historyContainer}>
      <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
        {title}
      </Typography>
      <Button
        label="Effacer"
        onPress={onPress}
        hideIcon
        buttonStyle={styles.clearButton}
        labelTypographyStyle={styles.clearButtonText}
      />
    </View>
  );

  return (
    <>
      {renderHistoryContainer("Historique des recherche", clear)}
      {searchHistory.length > 0
        ? renderSearchHistory()
        : renderNoHistoryText("Vous n'avez pas encore effectué de recherche")}
      {renderHistoryContainer("Récemmment consultés", clearCurrentOffers)}
      {consultedOffers.length > 0
        ? renderConsultedOffers()
        : renderNoHistoryText("Vous n'avez pas encore consulté d'offres")}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);

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
    flex: 1,
  },
  consultedOffersList: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  noHistoryText: {
    color: Colors.main_grey,
  },
});
