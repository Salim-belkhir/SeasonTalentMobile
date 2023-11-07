import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import Typography from "../Typography";
import { Colors } from "~/theme";
import { highlightSearchText, renderItems } from "~/utils";

const SearchSuggestion = ({ search, suggestedJobOffers }) => {
  const navigation = useNavigation();
  const renderSuggestedJobOffers = () => {
    if (suggestedJobOffers.length > 0) {
      return (
        <ScrollView
          style={styles.suggestedOffersContainer}
          showsVerticalScrollIndicator={false}
        >
          {renderItems(suggestedJobOffers, (jobOffer) => (
            <View key={jobOffer.id} style={styles.suggestedOffer}>
              <Typography type="l_medium">
                {highlightSearchText(jobOffer.title, search)}
              </Typography>
            </View>
          ))}
        </ScrollView>
      );
    } else if (search) {
      return (
        <View style={styles.noJobOfferContainer}>
          <Typography type="l_medium" typographyStyle={styles.noJobOfferText}>
            No job offer matched your search
          </Typography>
        </View>
      );
    } else {
      return null;
    }
  };

  return renderSuggestedJobOffers();
};

export default SearchSuggestion;

const styles = StyleSheet.create({
  suggestedOffersContainer: {
    marginTop: 16,
    marginLeft: "11%",
  },
  suggestedOffersTitle: {
    fontSize: 20,
    lineHeight: 19,
    color: Colors.main_black,
    marginBottom: 10,
  },
  suggestedOffer: {
    paddingVertical: 10,
  },
  noJobOfferContainer: {
    marginTop: 16,
    marginLeft: "11%",
  },
  noJobOfferText: {
    color: Colors.main_grey,
  },
});
