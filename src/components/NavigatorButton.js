import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "./Button";
import Icon from "./Icon";
import Typography from "./Typography";

const NavigatorButton = ({
  leftIcon,
  label,
  buttonStyle,
  navigate,
  selected,
}) => {
  const selectedColor = selected ? Colors.main_white : Colors.primary_color;

  return (
    <Button
      buttonStyle={[styles.navigatorButton, buttonStyle]}
      type="secondary"
      onPress={navigate}
    >
      <View style={styles.navigatorButtonLabelContainer}>
        <Icon name={leftIcon} size={20} color={selectedColor} />
        <Typography
          type="l_medium"
          typographyStyle={[
            styles.navigatorButtonLabel,
            selected && { color: Colors.main_white },
          ]}
        >
          {label}
        </Typography>
      </View>
      <Icon
        name={selected ? "close" : "right"}
        size={16}
        color={selectedColor}
        style={styles.navigatorButtonIcon}
      />
    </Button>
  );
};

export default NavigatorButton;

const styles = StyleSheet.create({
  navigatorButton: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 19,
  },
  navigatorButtonLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navigatorButtonLabel: {
    color: Colors.primary_color,
    marginLeft: 15,
    fontSize: 15,
  },
  navigatorButtonIcon: {
    marginLeft: 10,
  },
});
