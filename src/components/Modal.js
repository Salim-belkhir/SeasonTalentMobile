import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import { Colors } from "~/theme";
import Typography from "./Typography";
import Button from "./Button";
import Icon from "./Icon";

// This modal may upgrade depending on the useCase !!

/**
 * AlertModal component displays a modal with a title, message and an "Ok" button.
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines whether the modal is visible or not.
 * @param {string} props.title - The title of the modal.
 * @param {string} props.message - The message to display in the modal.
 * @param {function} props.onClose - The function to call when the "Ok" button is pressed.
 * @param {string} props.type - The type of the modal (error, success, warning or primary).
 * @returns {JSX.Element} - The AlertModal component.
 */

let mainColor = null;

const AlertModal = ({
  visible,
  title,
  message,
  onClose,
  type,
  ...otherProps
}) => {
  let icon = null;
  switch (type) {
    case "error":
      icon = "error";
      mainColor = Colors.error_color;
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

          <View style={styles.modalContentButtons}>
            <Button label="Ok" type="secondary" hideIcon onPress={onClose} />
          </View>
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
    alignItems: "flex-end",
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
