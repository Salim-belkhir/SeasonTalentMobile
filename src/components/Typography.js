import { StyleSheet, Text } from "react-native";
import { Colors, Fonts } from "~/theme";

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
    color: Colors.main_black,
  },

  xs_regular: Fonts.extra_small_body_regular,
  xs_medium: Fonts.extra_small_body_medium,
  xs_bold: Fonts.extra_small_body_bold,
  xs_light: Fonts.extra_small_body_light,
  s_regular: Fonts.small_body_regular,
  s_medium: Fonts.small_body_medium,
  s_bold: Fonts.small_body_bold,
  s_semibold: Fonts.small_body_semibold,
  l_regular: Fonts.large_body_regular,
  l_medium: Fonts.large_body_medium,
  l_bold: Fonts.large_body_bold,
  l_semibold: Fonts.large_body_semibold,

  disabled: {
    color: Colors.dark_grey,
  },
});

export default Typography;
