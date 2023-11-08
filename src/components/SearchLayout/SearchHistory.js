import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import { renderItems } from "~/utils";
import Button from "../Button";
import FlatList from "../FlatList";
import Icon from "../Icon";
import Typography from "../Typography";

const SearchHistory = ({
  search,
  setSearchHistory,
  searchHistory,
  setConsultedOffers,
  consultedOffers,
}) => {
  const navigation = useNavigation();

  const clear = () => {
    setSearchHistory([]);
  };

  const clearCurrentOffers = () => {
    setConsultedOffers([]);
  };

  const handleNavigateToJobOfferDetails = (item) => {
    navigation.navigate("EmploisDetails", { item });
  };

  const renderSearchHistoryItem = (item, index) => (
    <View key={index} style={styles.tabContentTextContainer}>
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
    </View>
  );

  const renderSearchHistory = () => {
    return renderItems(searchHistory.slice(0, 3), renderSearchHistoryItem);
  };

  const renderConsultedOffers = () => (
    <FlatList
      items={consultedOffers}
      onPressedItem={handleNavigateToJobOfferDetails}
      listStyle={styles.consultedOffersList}
    />
  );

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
      {searchHistory.length > 0 ? (
        renderSearchHistory()
      ) : (
        <Typography type="l_medium" typographyStyle={styles.noHistoryText}>
          Vous n'avez pas encore effectué de recherche
        </Typography>
      )}

      <View style={styles.historyContainer}>
        <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
          Récemmment consultés
        </Typography>
        <Button
          label="Effacer"
          onPress={clearCurrentOffers}
          hideIcon
          buttonStyle={styles.clearButton}
          labelTypographyStyle={styles.clearButtonText}
        />
      </View>
      {consultedOffers.length > 0 ? (
        renderConsultedOffers()
      ) : (
        <Typography type="l_medium" typographyStyle={styles.noHistoryText}>
          Vous n'avez pas encore consulté d'offres
        </Typography>
      )}
    </>
  );
};

export default SearchHistory;

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
  consultedOffersList: {
    marginTop: 16,
  },
  noHistoryText: {
    color: Colors.main_grey,
  },
});
