import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal } from "react-native";
import MainHeader from "../MainHeader";
import { Colors } from "~/theme";
import Button from "../Button";
import Typography from "../Typography";
import Icon from "../Icon";
import { useNavigation } from "@react-navigation/native";
import AlertModal from "../Modal";

const DetailsHeader = ({ data }) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const deleteJobOffer = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    console.log("delete");
    //navigate to previous screen
    navigation.pop();
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <MainHeader.goBackOnly
      headerStyle={styles.container}
      goBackButtonStyle={styles.goBackButton}
    >
      <AlertModal
        visible={showModal}
        title="Supprimer l'offre d'emploi"
        message="Êtes-vous sûr de vouloir supprimer cette offre d'emploi ?"
        onClose={cancelDelete}
        type="error"
        action={confirmDelete}
      />
      <Image
        source={require("~/assets/images/background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.headerInformationsContainer}>
        <Image source={{ uri: data.logo }} style={styles.companyLogo} />
        <Typography type="l_bold" typographyStyle={styles.title}>
          {data.title}
        </Typography>

        <View style={styles.otherInfosContainer}>
          <View style={styles.info}>
            <Icon name="enviroment" size={20} color={Colors.main_white} />
            <Typography type="l_regular" typographyStyle={styles.infoText}>
              {data.company}
            </Typography>
          </View>
          <View style={styles.info}>
            <Icon name="calendar" size={20} color={Colors.main_white} />
            <Typography type="l_regular" typographyStyle={styles.infoText}>
              {data.duration}
            </Typography>
          </View>
          <View style={styles.info}>
            <Icon name="wallet" size={20} color={Colors.main_white} />
            <Typography type="l_regular" typographyStyle={styles.infoText}>
              {data.salary}
            </Typography>
          </View>
        </View>
      </View>
      <Button buttonStyle={styles.rightActionButton} onPress={deleteJobOffer}>
        <Icon name="delete" size={30} color={Colors.error_color} />
      </Button>
    </MainHeader.goBackOnly>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerInformationsContainer: {
    marginTop: 70,
    paddingHorizontal: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  companyLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    color: "#fff",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: 400,
    top: -50,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  goBackButton: {
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: 70,
    marginLeft: 10,
  },
  rightActionButton: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 70,
    marginRight: 16,
    height: 60,
    width: 40,
  },
  otherInfosContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: `${Colors.main_white}70`,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 15,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 28,
    color: Colors.main_white,
    marginLeft: 6,
  },
});
