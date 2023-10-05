import { Platform } from "react-native";

const fontFamilyName = {
  ...Platform.select({
    ios: {
      default: "Montserrat-regular",
      black: "Montserrat-black",
      light: "Montserrat-light",
      blackItalic: "Montserrat-blackItalic",
      lightItalic: "Montserrat-lightItalic",
      bold: "Montserrat-bold",
      medium: "Montserrat-medium",
      boldItalic: "Montserrat-boldItalic",
      mediumItalic: "Montserrat-mediumItalic",
      extraBold: "Montserrat-extraBold",
      regular: "Montserrat-regular",
      extraBoldItalic: "Montserrat-extraBoldItalic",
      semiBold: "Montserrat-semiBold",
      extraLight: "Montserrat-extraLight",
      semiBoldItalic: "Montserrat-semiBoldItalic",
      extraLightItalic: "Montserrat-extraLightItalic",
      thin: "Montserrat-thin",
      regularItalic: "Montserrat-regularItalic",
      thinItalic: "Montserrat-thinItalic",
    },
    android: {
      default: "Montserrat-regular",
      black: "Montserrat-black",
      light: "Montserrat-light",
      blackItalic: "Montserrat-blackItalic",
      lightItalic: "Montserrat-lightItalic",
      bold: "Montserrat-bold",
      medium: "Montserrat-medium",
      boldItalic: "Montserrat-boldItalic",
      mediumItalic: "Montserrat-mediumItalic",
      extraBold: "Montserrat-extraBold",
      regular: "Montserrat-regular",
      extraBoldItalic: "Montserrat-extraBoldItalic",
      semiBold: "Montserrat-semiBold",
      extraLight: "Montserrat-extraLight",
      semiBoldItalic: "Montserrat-semiBoldItalic",
      extraLightItalic: "Montserrat-extraLightItalic",
      thin: "Montserrat-thin",
      regularItalic: "Montserrat-regularItalic",
      thinItalic: "Montserrat-thinItalic",
    },
  }),
};

/**
 * @param { "default" | "thin" | "extraLight" | "light" | "regular" | "medium" | "semiBold" | "bold" | "extraBold" | "black" } weight
 * @param { "normal" | "italic" } fontStyle
 * @returns
 */
const getFontFamily = (weight = "default", fontStyle = "normal") => {
  const familyStyle = fontStyle.toLowerCase === "italic" ? "Italic" : "";

  return {
    fontFamily:
      fontFamilyName[`${weight}${familyStyle}`] || fontFamilyName.default,
    fontStyle,
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

const TYPOGRAPHY = {
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
    fontSize: 14,
    lineHeight: getLineHeight(14),
    textAlignVertical: "center",
  },
  small_body_medium: {
    ...getFontFamily("medium"),
    fontSize: 14,
    lineHeight: getLineHeight(14),
    textAlignVertical: "center",
  },
  small_body_bold: {
    ...getFontFamily("bold"),
    fontSize: 14,
    lineHeight: getLineHeight(14),
    textAlignVertical: "center",
  },
  large_body_regular: {
    ...getFontFamily("regular"),
    fontSize: 16,
    lineHeight: getLineHeight(16),
    textAlignVertical: "center",
  },
  large_body_medium: {
    ...getFontFamily("medium"),
    fontSize: 16,
    lineHeight: getLineHeight(16),
    textAlignVertical: "center",
  },
  large_body_bold: {
    ...getFontFamily("bold"),
    fontSize: 16,
    lineHeight: getLineHeight(16),
    textAlignVertical: "center",
  },
};

export default {
  getFontFamily,
  getLineHeight,
  weight: WEIGHT,
  ...TYPOGRAPHY,
};
