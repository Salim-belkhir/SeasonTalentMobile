const material = {
  pure_black: "#000000",
  pure_white: "#FFFFFF",
  blue: "#3871E0",

  //SeasonTalentMobile
  greenBlue: "#0E988C",
  purpleRetro: "#5371FF",
  white: "#F8FAFB",
  black: "#131313",
  red: "#E0475F",
  green: "#17BF97",
  grey: "#CACBCE",
  yellow: "#ffcc00",
  light_grey: "#FAFAFD",
  medium_grey: "#F2F2F3",
  dark_grey: "#AFB0B6",
};

/**
 * Defines the color palette used in the application.
 * @typedef {Object} Colors
 * @property {string} primary_color - The primary color used in the application.
 * @property {string} secondary_color - The secondary color used in the application.
 * @property {string} tertiary_color - The tertiary color used in the application.
 * @property {string} main_white - The main white color used in the application.
 * @property {string} main_black - The main black color used in the application.
 * @property {string} main_grey - The main grey color used in the application.
 * @property {string} success_color - The success color used in the application.
 * @property {string} error_color - The error color used in the application.
 * @property {string} tel_background_color - The background color used for telephone inputs in the application.
 * @property {string} input_gray - The gray color used for input fields in the application.
 * @property {string} disabled_color - The color used for disabled elements in the application.
 * @property {string} warning_color - The warning color used in the application.
 */
export default {
  primary_color: material.greenBlue,
  secondary_color: material.purpleRetro,
  tertiary_color: material.yellow,
  main_white: material.white,
  main_black: material.black,
  main_grey: material.grey,
  success_color: material.green,
  error_color: material.red,
  tel_background_color: material.light_grey,
  input_gray: material.medium_grey,
  disabled_color: material.dark_grey,
  warning_color: material.yellow,
  ...material,
};
