import HeaderSection from "./HeaderSection";
import InputSection from "./InputSection";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";

const StepByStepLayout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderSection navigation={navigation} />
      <InputSection navigation={navigation} />
    </View>
  );
};

export default StepByStepLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    backgroundColor: Colors.main_white,
  },
});