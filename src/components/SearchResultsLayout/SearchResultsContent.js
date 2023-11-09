import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import FlatList from "../FlatList";

const SearchResultsContent = ({ results }) => {
  const navigation = useNavigation();
  const handleNavigateToJobOfferDetails = (item) => {
    navigation.navigate("EmploisDetails", { item });
    // add the item to the list of consulted offers
    AsyncStorage.getItem("consultedOffers").then((offers) => {
      if (offers) {
        const consultedOffers = JSON.parse(offers);
        if (!consultedOffers.find((offer) => offer.id === item.id)) {
          AsyncStorage.setItem(
            "consultedOffers",
            JSON.stringify([...consultedOffers, item])
          );
        }
      } else {
        AsyncStorage.setItem("consultedOffers", JSON.stringify([item]));
      }
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        items={results}
        listStyle={styles.list}
        onPressedItem={handleNavigateToJobOfferDetails}
      />
    </View>
  );
};

export default SearchResultsContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 23,
  },
  list: {
    paddingVertical: 20,
  },
});
