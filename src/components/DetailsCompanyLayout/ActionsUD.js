import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";
import Icon from "../Icon";
import AlertModal from "../Modal";
import Typography from "../Typography";

const renderButton = (label, iconName, iconColor, onPress, typographyStyle) => (
  <Button
    label={label}
    hideIcon
    buttonStyle={styles.actionButton}
    onPress={onPress}
  >
    <Icon name={iconName} size={18} color={iconColor} />
    <Typography type="l_medium" typographyStyle={typographyStyle}>
      {label}
    </Typography>
  </Button>
);

const ActionsUD = ({ company, deleteCompany, isPrincipal }) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const navigateToEditCompany = () => {
    navigation.navigate("CompanyCreation", {
      dataToUpdate: company,
      isPrincipal: isPrincipal,
    });
  };

  const confirmDelete = () => {
    setShowModal(false);
    deleteCompany(company.id);
    navigation.navigate("CompaniesHome");
  };

  const cancelDelete = () => setShowModal(false);

  return (
    <View style={styles.logoContainer}>
      {renderButton(
        "Modifier",
        "edit",
        Colors.primary_color,
        navigateToEditCompany,
        styles.editButtonLabel
      )}
      <Image
        source={{
          uri: company.logo,
        }}
        alt="Company logo"
        style={styles.logo}
      />
      {!isPrincipal &&
        renderButton(
          "Supprimer",
          "delete",
          Colors.error_color,
          () => setShowModal(true),
          styles.deleteButtonLabel
        )}
      <AlertModal
        visible={showModal}
        title="Supprimer l'établissement"
        message="Êtes-vous sûr de vouloir supprimer cet établissement ?"
        onClose={cancelDelete}
        type="error"
        action={confirmDelete}
      />
    </View>
  );
};

export default ActionsUD;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: Colors.pure_white,
    borderWidth: 0,
    width: 115,
    height: 50,
  },
  editButtonLabel: {
    color: Colors.primary_color,
    marginLeft: 5,
  },
  deleteButton: {
    backgroundColor: Colors.main_white,
    borderWidth: 0,
    padding: 8,
    width: 50,
    height: 50,
  },
  deleteButtonLabel: {
    color: Colors.error_color,
    marginLeft: 5,
  },
  logo: {
    width: 80,
    height: 100,
    resizeMode: "contain",
  },
});
