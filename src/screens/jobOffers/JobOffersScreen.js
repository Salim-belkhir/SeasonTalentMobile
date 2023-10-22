import React from "react";
import { FlatList, SearchJobOffer, Typography } from "~/components";
import DefaultLayout from "~/components/DefaultLayout";
import MainHeader from "~/components/MainHeader";
import NavigatorButton from "~/components/NavigatorButton";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";

const mapStateToProps = (state) => {
  return {
    jobOffers: state.jobOffers.jobOffers,
  };
};

const JobOffersScreen = ({ navigation, jobOffers }) => {
  return (
    <DefaultLayout navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainHeader navigation={navigation} />
          <SearchJobOffer />
          <NavigatorButton
            label="Créer une offre d'emploi"
            leftIcon="plus"
            navigate={() => navigation.push("EmploisAjouter")}
          />
          <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
            Les offres actuelles
          </Typography>
        </View>
        <FlatList items={jobOffers} type="horizontalList" />
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
  },
  currentOffersTitle: {
    marginTop: 19,
    marginBottom: 21,
    fontSize: 16,
  },
});
