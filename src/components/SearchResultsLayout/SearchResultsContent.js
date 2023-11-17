import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { jobOfferActions } from "~/redux/actions";
import FlatList from "../FlatList";

const mapDispatchToProps = {
  loadRecentlyConsultedJobOffers:
    jobOfferActions.loadRecentlyConsultedJobOffers,
};

const mapStateToProps = (state) => ({
  consultedOffers: state.jobOffers.recentlyConsultedJobOffers,
});

const SearchResultsContent = ({
  results,
  loadRecentlyConsultedJobOffers,
  consultedOffers,
}) => {
  const navigation = useNavigation();
  const handleNavigateToJobOfferDetails = (item) => {
    navigation.navigate("EmploisDetails", { item });
    // add the item to the list of consulted offers

    if (!consultedOffers.find((offer) => offer.id === item.id)) {
      loadRecentlyConsultedJobOffers([item, ...consultedOffers]);
    } else {
      loadRecentlyConsultedJobOffers([
        item,
        ...consultedOffers.filter((consulterOffer) => consulterOffer !== item),
      ]);
    }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 23,
  },
  list: {
    paddingVertical: 20,
  },
});
