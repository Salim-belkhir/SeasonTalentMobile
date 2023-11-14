import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "~/theme";
import Button from "./Button";
import Icon from "./Icon";
import Typography from "./Typography";

const NavigatorButton = ({ leftIcon, label, buttonStyle, navigate }) => {
  return (
    <Button
      buttonStyle={[styles.NavigatorButton, buttonStyle]}
      type="secondary"
      onPress={navigate}
    >
      <View style={styles.NavigatorButtonLabelContainer}>
        <Icon name={leftIcon} size={20} color={Colors.primary_color} />
        <Typography
          type="l_medium"
          typographyStyle={styles.NavigatorButtonLabel}
        >
          {label}
        </Typography>
      </View>
      <Icon name="right" size={16} color={Colors.primary_color} />
    </Button>
  );
};

export default NavigatorButton;

const styles = StyleSheet.create({
  NavigatorButton: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 19,
  },
  NavigatorButtonLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  NavigatorButtonLabel: {
    color: Colors.primary_color,
    marginLeft: 15,
    fontSize: 15,
  },
});
