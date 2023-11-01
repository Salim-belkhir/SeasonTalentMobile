import React from "react";
import { View } from "react-native";
import { Colors } from "~/theme";
import DetailsHeader from "./DetailsHeader";

const DetailsLayout = ({ children, data }) => {
  return (
    <View style={{ backgroundColor: Colors.main_white, flex: 1 }}>
      <DetailsHeader data={data} />
      {children}
    </View>
  );
};

export default DetailsLayout;
