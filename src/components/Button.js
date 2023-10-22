import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import Typography from "./Typography";
import { Colors } from "~/theme";
import LottieView from "lottie-react-native";

/**
 * @typedef {{
 *  label?: string,
 *  labelType?: import('./Typography').TypographyType,
 *  labelTypographyStyle: import('./Typography').TypographyStyle,
 *  type?: 'primary' | 'secondary' | 'tertiary' | 'delete',
 *  buttonStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>,
 *  hideIcon: boolean,
 *  customIconSource: import('react-native').ImageSourcePropType,
 *  buttonIconStyle: import('react-native').ImageStyle,
 *  loading: boolean,
 * } & import('react-native').TouchableOpacityProps} Button
 */
/**
 * @param { Button } param0
 */
const Button = ({
  children,
  label,
  labelType,
  labelTypographyStyle = {},
  type = "primary",
  buttonStyle = {},
  hideIcon = false,
  customIconSource,
  buttonIconStyle,
  loading = false,
  ...otherProps
}) => {
  const icon = {
    delete: require("~/assets/icons/trash.png"),
    default: require("~/assets/icons/RightArrow.png"),
  };

  const themedLabelType = {
    primary: "l_bold",
    secondary: "l_bold",
    tertiary: "s_bold",
    delete: "l_bold",
    disabled: "l_bold",
  };

  return (
    <TouchableOpacity
      style={[
        styles.buttonBase,
        styles[`${type}_button`],
        otherProps.disabled && styles[`${type}_disabled`],
        buttonStyle,
      ]}
      {...otherProps}
    >
      {loading ? (
        <LottieView
          autoPlay
          style={styles.loadingIcon}
          source={require("~/assets/lotties/loading-dots.json")}
        />
      ) : children ? (
        children
      ) : (
        <>
          <Typography
            type={labelType ?? themedLabelType[type]}
            disabled={otherProps.disabled}
            typographyStyle={[
              styles[`${type}_Typography`],
              labelTypographyStyle,
            ]}
          >
            {label}
          </Typography>
          {!hideIcon && (
            <Image
              source={customIconSource ?? icon[type] ?? icon.default}
              style={[
                styles.buttonIcon,
                styles[`${type}_Icon`],
                otherProps.disabled && styles.disabledIcon,
                buttonIconStyle,
              ]}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    borderWidth: 4,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
  },

  buttonIcon: {
    height: 26.67,
    width: 26.67,
    marginLeft: 8.67,
    tintColor: Colors.secondary_color,
  },

  primary_button: {
    backgroundColor: Colors.primary_color,
    borderColor: Colors.primary_color,
  },

  secondary_button: {
    backgroundColor: `${Colors.primary_color}33`,
    borderColor: `${Colors.primary_color}66`,
  },

  tertiary_button: {
    height: 36,
    backgroundColor: Colors.primary_color,
    borderWidth: 0,
  },

  delete_button: {
    backgroundColor: `${Colors.quarternary_color}1A`,
    borderColor: "transparent",
  },

  delete_Typography: {
    color: Colors.quarternary_color,
  },

  delete_Icon: {
    tintColor: Colors.quarternary_color,
    height: 20,
    width: 20,
  },

  primary_disabled: {
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
  },

  secondary_disabled: {
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
  },

  delete_disabled: {
    backgroundColor: Colors.medium_grey,
    borderColor: Colors.medium_grey,
  },

  disabledIcon: {
    tintColor: Colors.dark_grey,
  },

  loadingIcon: {
    height: 55,
    width: 55,
  },
});

export default Button;
