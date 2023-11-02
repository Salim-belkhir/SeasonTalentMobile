import React from "react";
import { View, StyleSheet } from "react-native";
import { MainHeader, Typography, DefaultLayout } from "~/components";
import { CreateJobOfferForm } from "~/components/JobOffersComponents";
import { Colors } from "~/theme";

const CreateJobOffer = ({ route }) => {
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <MainHeader.basicHeader />
        <CreateJobOfferForm dataToUpdate={route.params?.data} />
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
});
