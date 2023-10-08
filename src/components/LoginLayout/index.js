import HeaderSection from "./HeaderSection";
import LogInputsSection from "./LogInputsSection";
import FooterSection from "./FooterSection";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";

const LoginLayout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderSection navigation={navigation} />
      <LogInputsSection navigation={navigation} />
      <FooterSection navigation={navigation} />
    </View>
  );
};

export default LoginLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    backgroundColor: Colors.main_white,
  },
});
