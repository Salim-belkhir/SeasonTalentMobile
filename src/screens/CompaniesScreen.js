import React from "react";
import { View, Text } from "react-native";
import { Colors } from "~/theme";

const CompaniesScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.main_white,
      }}
    >
      <Text>CompaniesScreen</Text>
    </View>
  );
};

export default CompaniesScreen;
