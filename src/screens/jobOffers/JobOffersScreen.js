import React from "react";
import {
  DefaultLayout,
  FlatList,
  SearchJobOffer,
  Typography,
  MainHeader,
  NavigatorButton,
} from "~/components";
import { connect } from "react-redux";
import { View, StyleSheet, Keyboard } from "react-native";
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
        />
      </View>
    </DefaultLayout>
  );
};

export default connect(mapStateToProps)(JobOffersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: Colors.main_white,
  },
  currentOffersTitle: {
    marginTop: 19,
    marginBottom: 21,
    fontSize: 16,
  },
});
