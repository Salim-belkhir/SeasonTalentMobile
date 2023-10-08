import React from "react";
import { View, TextInput as RNTextInput, StyleSheet } from "react-native";
// import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "~/theme";
import Typography from "./Typography";

const TextInput = ({ leftIcon, rightIcon, ...rest }) => {
  return (
    <View
      style={
        // lets accept more styles from the outside
        [styles.container, rest.InputStyle]
      }
    >
      {leftIcon && (
        <AntDesign
          name={leftIcon}
          size={20}
          color="black"
          style={styles.icon}
        />
      )}
      <RNTextInput
        style={styles.input}
        keyboardType="default"
        returnKeyType="done"
        selectionColor={Colors.primary_color}
        {...rest}
      />
      <Typography type="s_regular" typographyStyle={styles.error}>
        {rest.error}
      </Typography>
      {rightIcon && (
        <AntDesign
          name={rightIcon}
          size={24}
          color="black"
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.main_grey,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 52,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "Montserrat-medium",
  },
  icon: {
    marginRight: 8,
    color: Colors.main_grey,
  },
});

export default TextInput;
