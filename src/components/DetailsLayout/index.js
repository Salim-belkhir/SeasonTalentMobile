import React from "react";
import { View } from "react-native";
import { Colors } from "~/theme";
import DetailsHeader from "./DetailsHeader";
import DetailsTabContent from "./DetailsTabContent";
import DetailsFooter from "./DetailsFooter";

const DetailsLayout = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.main_white,
        flex: 1,
      }}
    >
      <DetailsHeader data={data} />
      <DetailsTabContent data={data} />
      <DetailsFooter data={data} />
    </View>
  );
};

export default DetailsLayout;
