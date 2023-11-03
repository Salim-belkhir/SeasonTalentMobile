import React, { useState } from "react";
import { FlatList, SearchJobOffer, Typography } from "~/components";
import DefaultLayout from "~/components/DefaultLayout";
import MainHeader from "~/components/MainHeader";
import NavigatorButton from "~/components/NavigatorButton";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Colors } from "~/theme";

const mapStateToProps = (state) => ({
  jobOffers: state.jobOffers.jobOffers,
});

const JobOffersScreen = ({ navigation, jobOffers }) => {
  const [isSearching, setIsSearching] = useState(false);

  const header = !isSearching ? (
    <MainHeader navigation={navigation} />
  ) : (
    <MainHeader.exitOnly
      headerStyle={styles.headerStyle}
      goBackButtonStyle={styles.goBackButton}
      onPress={() => setIsSearching(false)}
    >
      <Typography type="l_bold" typographyStyle={styles.headerTitle}>
        Recherche
      </Typography>
    </MainHeader.exitOnly>
  );

  return (
    <DefaultLayout navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}>
          {header}
          <SearchJobOffer setIsSearching={setIsSearching} />
          <NavigatorButton
            label="Créer une offre d'emploi"
            leftIcon="plus"
            navigate={() => navigation.push("EmploisAjouter")}
          />
          <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
            Les offres actuelles
          </Typography>
        </View>
        <FlatList
          items={jobOffers}
          type="horizontalList"
          onPressedItem={(item) =>
            navigation.navigate("EmploisDetails", { item })
          }
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
  headerStyle: {
    marginTop: 65,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    alignSelf: "center",
  },
  goBackButton: {},
});
