import React, { useState } from "react";
import { View, TextInput as RNTextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "~/theme";
import Typography from "./Typography";
import Icon from "./Icon";

const TextInput = ({
  leftIcon,
  rightIcon,
  secureTextEntry,
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, onChangeValue] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <View
        style={
          // lets accept more styles from the outside
          [
            styles.container,
            rest.InputStyle,
            isFocused || value ? styles.focusedContainer : null,
            error ? styles.errorContainer : null,
          ]
        }
      >
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={20}
            color="black"
            style={[
              styles.icon,
              isFocused || value ? styles.focusedIcon : null,
              error ? styles.errorIcon : null,
            ]}
          />
        )}
        <RNTextInput
          style={[styles.input]}
          keyboardType="default"
          returnKeyType="done"
          selectionColor={Colors.primary_color}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChangeValue}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={Colors.main_grey}
          {...rest}
        />
        {rightIcon && (
          <AntDesign
            name={rightIcon}
            size={24}
            color={showPassword ? Colors.main_black : Colors.main_grey}
            style={{ marginRight: 8 }}
            onPress={toggleShowPassword}
          />
        )}
      </View>
      {error && (
        <Typography type="s_medium" typographyStyle={styles.error}>
          {error}
        </Typography>
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
  focusedContainer: {
    borderColor: Colors.primary_color,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    fontFamily: "Montserrat-medium",
  },
  icon: {
    marginRight: 8,
    color: Colors.main_grey,
  },
  focusedIcon: {
    color: Colors.primary_color,
  },
  error: {
    color: Colors.red,
    marginTop: 8,
    marginLeft: 21,
  },
  errorContainer: {
    borderColor: Colors.red,
  },
  errorIcon: {
    color: Colors.red,
  },
});

export default TextInput;
