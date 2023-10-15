import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import MainHeader from "./MainHeader";
import { Colors } from "~/theme";

const DefaultLayout = ({ children, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <MainHeader navigation={navigation} />
      {children}
    </ScrollView>
  );
};

export default DefaultLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 23,
    backgroundColor: Colors.main_white,
  },
});
