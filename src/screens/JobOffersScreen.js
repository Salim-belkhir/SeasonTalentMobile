import React from "react";
import { SearchJobOffer } from "~/components";
import DefaultLayout from "~/components/DefaultLayout/index.js";

const JobOffersScreen = ({ navigation }) => {
  return (
    <DefaultLayout navigation={navigation}>
      <SearchJobOffer />
    </DefaultLayout>
  );
};

export default JobOffersScreen;
