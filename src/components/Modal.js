import { Modal, StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "./Button";
import Icon from "./Icon";
import Typography from "./Typography";

const AlertModal = ({
  visible,
  title,
  message,
  onClose,
  action,
  type,
  ...otherProps
}) => {
  let icon = null;
  let mainColor = null;

  switch (type) {
    case "error":
      icon = "questioncircleo";
      mainColor = Colors.error_color;
      break;
    case "confirm":
      icon = "questioncircleo";
      mainColor = Colors.primary_color;
      break;
    case "success":
      icon = "check_circle";
      mainColor = Colors.success_color;
      break;
    case "warning":
      icon = "warning";
      mainColor = Colors.warning_color;
      break;
    default:
      icon = "info";
      mainColor = Colors.primary_color;
  }

  const renderButtons = () => {
    if (type === "error") {
      return (
        <>
          <Button
            label="Annuler"
            buttonStyle={{
              marginRight: 10,
              backgroundColor: `${mainColor}70`,
              borderWidth: 0,
              paddingHorizontal: 10,
            }}
            labelTypographyStyle={{ color: mainColor }}
            onPress={onClose}
            hideIcon
          />
          <Button
            label="Supprimer"
            buttonStyle={{
              backgroundColor: `${Colors.primary_color}70`,
              borderWidth: 0,
              paddingHorizontal: 10,
            }}
            labelTypographyStyle={{ color: Colors.primary_color }}
            onPress={action}
            hideIcon
          />
        </>
      );
    } else if (type === "confirm") {
      return (
        <>
          <Button
            label="Annuler"
            buttonStyle={{
              marginRight: 10,
              backgroundColor: `${Colors.warning_color}70`,
              borderWidth: 0,
              paddingHorizontal: 10,
            }}
            labelTypographyStyle={{ color: Colors.warning_color }}
            onPress={onClose}
            hideIcon
          />
          <Button
            label="Confirmer"
            buttonStyle={{
              backgroundColor: `${mainColor}70`,
              borderWidth: 0,
              paddingHorizontal: 10,
            }}
            labelTypographyStyle={{ color: mainColor }}
            onPress={action}
            hideIcon
          />
        </>
      );
    } else {
      return (
        <Button
          label="Ok"
          buttonStyle={{
            backgroundColor: `${mainColor}70`,
            borderWidth: 0,
            paddingHorizontal: 10,
          }}
          labelTypographyStyle={{ color: Colors.pure_white }}
          onPress={onClose}
          hideIcon
        />
      );
    }
  };

  return (
    <Modal visible={visible} animationType="fade" transparent {...otherProps}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalContentText}>
            <View style={styles.titleContainer}>
              <Icon name={icon} size={24} color={mainColor} />
              <Typography
                type="l_bold"
                typographyStyle={{
                  color: mainColor,
                  marginLeft: 10,
                }}
              >
                {title}
              </Typography>
            </View>
            <Typography type="l_regular" typographyStyle={{ marginTop: 10 }}>
              {message}
            </Typography>
          </View>

          <View style={styles.modalContentButtons}>{renderButtons()}</View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: Colors.main_white,
    padding: 18,
    borderRadius: 10,
    width: "80%",
  },
  modalContentButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalContentText: {
    marginBottom: 20,
  },
});
