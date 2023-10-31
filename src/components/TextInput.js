import React, { useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  Keyboard,
} from "react-native";
import { Colors } from "~/theme";
import Typography from "./Typography";
import Icon from "./Icon";
import TextArea from "./TextArea";
import Button from "./Button";

/**
 * A custom TextInput component that accepts various props to customize its appearance and behavior.
 * @param {Object} props - The props object that contains the following properties:
 * @param {string} props.leftIcon - The name of the icon to display on the left side of the input.
 * @param {string} props.rightIcon - The name of the icon to display on the right side of the input.
 * @param {boolean} props.secureTextEntry - A flag that indicates whether the input should be masked for password entry.
 * @param {string} props.error - An error message to display below the input if there is an error.
 * @param {Object} props.rest - Any additional props to pass to the underlying TextInput component.
 * @returns {JSX.Element} A custom TextInput component.
 */
const TextInput = ({
  leftIcon,
  rightIcon,
  secureTextEntry,
  error,
  inputStyle,
  inputTypographyStyle,
  textArea,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, onChangeValue] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Handles the focus event for the input.
   */
  const handleFocus = () => {
    setIsFocused(true);
  };

  /**
   * Handles the blur event for the input.
   */
  const handleBlur = () => {
    setIsFocused(false);
  };

  /**
   * Toggles the visibility of the password for secure text entry inputs.
   */
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  onPress = () => {
    Keyboard.dismiss();
  };

  return (
    <View>
      <View
        style={
          // lets accept more styles from the outside
          [
            styles.container,
            inputStyle,
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
          style={[styles.input, inputTypographyStyle]}
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
          <Icon
            name={rightIcon}
            size={24}
            color={showPassword ? Colors.main_black : Colors.main_grey}
            style={{ marginRight: 8 }}
            onPress={toggleShowPassword}
          />
        )}
        {textArea && (
          <Button
            label="Terminer"
            buttonStyle={styles.textAreaButton}
            labelTypographyStyle={styles.textAreaButtonLabel}
            hideIcon
            onPress={onPress}
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
    borderRadius: 9,
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
    marginTop: 2,
    marginLeft: 21,
  },
  errorContainer: {
    borderColor: Colors.red,
  },
  errorIcon: {
    color: Colors.red,
  },

  textAreaButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    position: "absolute",
    right: 15,
    bottom: -5,
  },
  textAreaButtonLabel: {
    color: Colors.main_grey,
  },
});

export default TextInput;
