import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import FlatList from "../FlatList";

const SearchResultsContent = ({ results }) => {
  const navigation = useNavigation();
  const handleNavigateToJobOfferDetails = (item) => {
    navigation.navigate("EmploisDetails", { item });
  };
  return (
    <View style={styles.container}>
      <FlatList
        items={results}
        onPressedItem={handleNavigateToJobOfferDetails}
      />
    </View>
  );
};

export default SearchResultsContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    paddingVertical: 23,
    height: "100%",
  },
});
