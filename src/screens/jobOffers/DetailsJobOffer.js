import React from "react";
import { View, Text } from "react-native";
import { DefaultLayout, DetailsLayout } from "~/components";

const DetailsJobOffer = ({ route }) => {
  return (
    <DefaultLayout>
      <DetailsLayout data={route.params.item} />
    </DefaultLayout>
  );
};

export default DetailsJobOffer;
