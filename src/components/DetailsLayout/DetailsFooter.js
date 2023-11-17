import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Button";
import { Colors } from "~/theme";
import { useNavigation } from "@react-navigation/native";

const DetailsFooter = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        label="Modifier l'offre"
        onPress={() => navigation.push("EmploisAjouter", { data })}
        hideIcon
        labelTypographyStyle={styles.labelTypographyStyle}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

export default DetailsFooter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
  labelTypographyStyle: {
    color: Colors.main_white,
  },
  buttonStyle: {
    marginBottom: 35,
  },
});
