import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";
import Icon from "../Icon";
import AlertModal from "../Modal";
import Typography from "../Typography";

const ActionsUD = ({ company, deleteCompany }) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const navigateToEditCompany = () => {
    navigation.navigate("CompanyCreation", {
      dataToUpdate: company,
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
      {/* showing a modal to confirme the delete of the company */}
      <Button
        label="Modifier"
        hideIcon
        buttonStyle={styles.actionButton}
        onPress={navigateToEditCompany}
      >
        <Icon name="edit" size={18} color={Colors.primary_color} />
        <Typography type="l_medium" typographyStyle={styles.editButtonLabel}>
          Modifier
        </Typography>
      </Button>
      <Image
        source={{
          uri: company.logo,
        }}
        alt="Company logo"
        style={styles.logo}
      />
      <Button
        label="Supprimer"
        hideIcon
        buttonStyle={styles.actionButton}
        onPress={() => setShowModal(true)}
      >
        <Icon name="delete" size={18} color={Colors.error_color} />
        <Typography type="l_medium" typographyStyle={styles.deleteButtonLabel}>
          Supprimer
        </Typography>
      </Button>

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
