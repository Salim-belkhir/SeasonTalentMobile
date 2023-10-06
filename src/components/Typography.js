import { StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "~/theme";
import * as Font from "expo-font";

let customFonts = {
  default: require("~/assets/fonts/Montserrat-regular.ttf"),
  "Montserrat-regular": require("~/assets/fonts/Montserrat-regular.ttf"),
  "Montserrat-black": require("~/assets/fonts/Montserrat-black.ttf"),
  "Montserrat-light": require("~/assets/fonts/Montserrat-light.ttf"),
  "Montserrat-blackItalic": require("~/assets/fonts/Montserrat-blackItalic.ttf"),
  "Montserrat-lightItalic": require("~/assets/fonts/Montserrat-lightItalic.ttf"),
  "Montserrat-bold": require("~/assets/fonts/Montserrat-bold.ttf"),
  "Montserrat-medium": require("~/assets/fonts/Montserrat-medium.ttf"),
  "Montserrat-boldItalic": require("~/assets/fonts/Montserrat-boldItalic.ttf"),
  "Montserrat-mediumItalic": require("~/assets/fonts/Montserrat-mediumItalic.ttf"),
  "Montserrat-extraBold": require("~/assets/fonts/Montserrat-extraBold.ttf"),
  "Montserrat-regular": require("~/assets/fonts/Montserrat-regular.ttf"),
  "Montserrat-extraBoldItalic": require("~/assets/fonts/Montserrat-extraBoldItalic.ttf"),
  "Montserrat-semiBold": require("~/assets/fonts/Montserrat-semiBold.ttf"),
  "Montserrat-extraLight": require("~/assets/fonts/Montserrat-extraLight.ttf"),
  "Montserrat-semiBoldItalic": require("~/assets/fonts/Montserrat-semiBoldItalic.ttf"),
  "Montserrat-extraLightItalic": require("~/assets/fonts/Montserrat-extraLightItalic.ttf"),
  "Montserrat-thin": require("~/assets/fonts/Montserrat-thin.ttf"),
  "Montserrat-regularItalic": require("~/assets/fonts/Montserrat-regularItalic.ttf"),
  "Montserrat-thinItalic": require("~/assets/fonts/Montserrat-thinItalic.ttf"),
};

/**
 * @param { "default" | "thin" | "extraLight" | "light" | "regular" | "medium" | "semiBold" | "bold" | "extraBold" | "black" } weight
 * @param { "normal" | "italic" } fontStyle
 * @returns
 */
const getFontFamily = (weight = "regular", fontStyle = "normal") => {
  const familyStyle = fontStyle.toLowerCase() === "italic" ? "Italic" : "";

  return {
    fontFamily: `Montserrat-${weight}${familyStyle}` || "Montserrat-regular",
  };
};

const WEIGHT = {
  thin: "100",
  extraLight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
};

const getLineHeight = (fontSize, rate = 1.4) => {
  return fontSize * rate;
};

const Fonts = {
  extra_small_body_regular: {
    ...getFontFamily("regular"),
    fontSize: 10,
    lineHeight: getLineHeight(10),
    textAlignVertical: "center",
  },
  extra_small_body_medium: {
    ...getFontFamily("medium"),
    fontSize: 10,
    lineHeight: getLineHeight(10),
    textAlignVertical: "center",
  },
  extra_small_body_bold: {
    ...getFontFamily("bold"),
    fontSize: 10,
    lineHeight: getLineHeight(10),
    textAlignVertical: "center",
  },
  extra_small_body_light: {
    ...getFontFamily("light"),
    fontSize: 10,
    lineHeight: getLineHeight(10),
    textAlignVertical: "center",
  },
  small_body_regular: {
    ...getFontFamily("regular"),
    fontSize: 12,
    lineHeight: getLineHeight(12),
    textAlignVertical: "center",
  },
  small_body_medium: {
    ...getFontFamily("medium"),
    fontSize: 12,
    lineHeight: getLineHeight(12),
    textAlignVertical: "center",
  },
  small_body_bold: {
    ...getFontFamily("bold"),
    fontSize: 12,
    lineHeight: getLineHeight(12),
    textAlignVertical: "center",
  },
  large_body_regular: {
    ...getFontFamily("regular"),
    fontSize: 14,
    lineHeight: getLineHeight(14),
    textAlignVertical: "center",
  },
  large_body_medium: {
    ...getFontFamily("medium"),
    fontSize: 14,
    lineHeight: getLineHeight(14),
    textAlignVertical: "center",
  },
  large_body_bold: {
    ...getFontFamily("bold"),
    fontSize: 14,
    lineHeight: getLineHeight(14),
    textAlignVertical: "center",
  },
};

/**
 * @typedef { 'xs_regular' | 'xs_medium' | 'xs_bold' | 'xs_light' | 's_regular' | 's_medium' | 's_bold' | 'l_regular' | 'l_medium' | 'l_bold' } TypographyType
 *
 * @typedef { import('react-native').StyleProp<import('react-native').TextStyle> } TypographyStyle
 *
 * @typedef {{
 *    type?: TypographyType,
 *    typographyStyle?: TypographyStyle,
 * }} Typography
 */
/**
 * @param {Typography & import('react-native').TextProps} param0
 */
const Typography = ({
  children,
  typographyStyle = {},
  type = "s_regular",
  ...otherProps
}) => {
  const [fontsLoaded] = Font.useFonts(customFonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={[
        styles.label,
        styles[type],
        typographyStyle,
        otherProps.disabled && styles.disabled,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.secondary_color,
  },

  xs_regular: Fonts.extra_small_body_regular,
  xs_medium: Fonts.extra_small_body_medium,
  xs_bold: Fonts.extra_small_body_bold,
  xs_light: Fonts.extra_small_body_light,
  s_regular: Fonts.small_body_regular,
  s_medium: Fonts.small_body_medium,
  s_bold: Fonts.small_body_bold,
  l_regular: Fonts.large_body_regular,
  l_medium: Fonts.large_body_medium,
  l_bold: Fonts.large_body_bold,

  disabled: {
    color: Colors.dark_grey,
  },
});

export default Typography;
