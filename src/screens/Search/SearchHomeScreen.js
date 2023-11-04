import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchHome = ({ route }) => {
  const { type } = route.params;

  return (
    <View style={styles.container}>
      <Text>SearchHome</Text>
      <Text>{type} </Text>
    </View>
  );
};

export default SearchHome;

const styles = StyleSheet.create({
  container: {},
});
