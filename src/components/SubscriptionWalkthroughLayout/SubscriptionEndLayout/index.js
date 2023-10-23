import HeaderSection from "../HeaderSection";
import FinalSection from "./FinalSection";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";

const SubscriptionFirstStepLayout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderSection navigation={navigation} />
      <FinalSection navigation={navigation} />
    </View>
  );
};

export default SubscriptionFirstStepLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    backgroundColor: Colors.main_white,
  },
});
