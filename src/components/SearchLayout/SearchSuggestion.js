import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "~/theme";
import { renderItems } from "~/utils";
import Typography from "../Typography";

const SearchSuggestion = ({ search, suggestedJobOffers }) => {
  const navigation = useNavigation();
  const highlightSearchText = (text, search) => {
    if (!search) {
      return text;
    }
    const regex = new RegExp(`(${search})`, "gi");
    return (
      <>
        {text.split(regex).map((part, i) =>
          regex.test(part) ? (
            <Typography key={i} type="l_bold">
              {part}
            </Typography>
          ) : (
            <Typography key={i} type="l_regular">
              {part}
            </Typography>
          )
        )}
      </>
    );
  };

  const renderSuggestedJobOffers = () => {
    if (suggestedJobOffers.length > 0) {
      return (
        <ScrollView
          style={styles.suggestedOffersContainer}
          showsVerticalScrollIndicator={false}
        >
          {renderItems(suggestedJobOffers, (jobOffer) => (
            <TouchableOpacity
              key={jobOffer.id}
              style={styles.suggestedOffer}
              onPress={() => {
                navigation.navigate("EmploisDetails", { item: jobOffer });
                AsyncStorage.getItem("consultedOffers").then((offers) => {
                  if (offers) {
                    const consultedOffers = JSON.parse(offers);
                    if (
                      !consultedOffers.find((offer) => offer.id === jobOffer.id)
                    ) {
                      AsyncStorage.setItem(
                        "consultedOffers",
                        JSON.stringify([...consultedOffers, jobOffer])
                      );
                    }
                  } else {
                    AsyncStorage.setItem(
                      "consultedOffers",
                      JSON.stringify([jobOffer])
                    );
                  }
                });
              }}
            >
              <Typography type="l_medium">
                {highlightSearchText(jobOffer.title, search)}
              </Typography>
            </TouchableOpacity>
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
