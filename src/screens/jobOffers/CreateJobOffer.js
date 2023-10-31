import React from "react";
import { View, StyleSheet } from "react-native";
import { MainHeader, Typography, DefaultLayout } from "~/components";
import { CreateJobOfferForm } from "~/components/JobOffersComponents";
import { Colors } from "~/theme";

const CreateJobOffer = () => {
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <MainHeader.basicHeader />
        <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
          Création d’une offre d’emploi
        </Typography>
        <CreateJobOfferForm />
      </View>
    </DefaultLayout>
  );
};

export default CreateJobOffer;

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
