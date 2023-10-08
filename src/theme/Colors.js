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
  yellow: "#F6C90E",
  light_grey: "#FAFAFD",
  medium_grey: "#F2F2F3",
  dark_grey: "#AFB0B6",
};

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
  ...material,
};
