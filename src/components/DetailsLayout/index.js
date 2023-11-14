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
        flex: 1,
        backgroundColor: Colors.main_white,
      }}
    >
      <DetailsHeader data={data} />
      <DetailsTabContent data={data} />
      <DetailsFooter data={data} />
    </View>
  );
};

export default DetailsLayout;
