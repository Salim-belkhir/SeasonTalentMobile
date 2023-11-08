import { Keyboard, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import {
  DefaultLayout,
  FlatList,
  MainHeader,
  NavigatorButton,
  SearchJobOffer,
  Typography,
} from "~/components";
import { Colors } from "~/theme";

const mapStateToProps = (state) => ({
  jobOffers: state.jobOffers.jobOffers,
});

const JobOffersScreen = ({ navigation, jobOffers }) => {
  const handleSearchJobOffer = () => {
    Keyboard.dismiss();
    navigation.push("EmploisRecherche");
  };

  const handleNavigateToAddJobOffer = () => {
    navigation.push("EmploisAjouter");
  };

  const handleNavigateToJobOfferDetails = (item) => {
    navigation.navigate("EmploisDetails", { item });
  };

  return (
    <DefaultLayout navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainHeader navigation={navigation} />
          <SearchJobOffer action={handleSearchJobOffer} />
          <NavigatorButton
            label="Créer une offre d'emploi"
            leftIcon="plus"
            navigate={handleNavigateToAddJobOffer}
          />
          <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
            Offres d'emploi actuelles
          </Typography>
        </View>

        <FlatList
          items={jobOffers}
          type="horizontalList"
          onPressedItem={handleNavigateToJobOfferDetails}
          listStyle={styles.jobOffersList}
        />
      </View>
    </DefaultLayout>
  );
};

export default connect(mapStateToProps)(JobOffersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
  currentOffersTitle: {
    marginTop: 19,
    fontSize: 16,
  },
  header: {
    paddingHorizontal: 23,
    paddingBottom: 15,
    backgroundColor: Colors.pure_white,
  },
  jobOffersList: {
    marginTop: 10,
    paddingHorizontal: 19,
  },
});
