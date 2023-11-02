import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal } from "react-native";
import MainHeader from "../MainHeader";
import { Colors } from "~/theme";
import Button from "../Button";
import Typography from "../Typography";
import Icon from "../Icon";
import { useNavigation } from "@react-navigation/native";
import AlertModal from "../Modal";
import { connect } from "react-redux";
import { deleteJobOffer } from "~/redux/actions";

const mapDispatchToProps = (dispatch) => ({
  deleteJobOffer: (id) => dispatch(deleteJobOffer(id)),
});

const DetailsHeader = ({ data }) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const deleteJobOffer = () => setShowModal(true);
  const confirmDelete = () => {
    setShowModal(false);
    deleteJobOffer(data.id);
    navigation.pop();
  };
  const cancelDelete = () => setShowModal(false);

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
          {[
            { name: "enviroment", text: data.company },
            { name: "calendar", text: data.duration },
            { name: "wallet", text: data.salary },
          ].map(({ name, text }) => (
            <View key={name} style={styles.info}>
              <Icon name={name} size={16} color={Colors.main_white} />
              <Typography type="l_regular" typographyStyle={styles.infoText}>
                {text}
              </Typography>
            </View>
          ))}
        </View>
      </View>
      <Button buttonStyle={styles.rightActionButton} onPress={deleteJobOffer}>
        <Icon name="delete" size={30} color={Colors.error_color} />
      </Button>
    </MainHeader.goBackOnly>
  );
};

export default connect(null, mapDispatchToProps)(DetailsHeader);

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
    paddingHorizontal: 8,
    margin: 12,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 28,
    color: Colors.main_white,
    marginLeft: 6,
  },
});
