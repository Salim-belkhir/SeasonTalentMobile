import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";
import Button from "../Button";
import Icon from "../Icon";
import MainHeader from "../MainHeader";
import AlertModal from "../Modal";
import Typography from "../Typography";

// Define mapDispatchToProps to connect createJobOffer action to the component
const mapDispatchToProps = {
  deleteJobOffer: jobOfferActions.deleteJobOffer,
};
const DetailsHeader = ({ data, deleteJobOffer }) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const deleteJobModal = () => setShowModal(true);
  const confirmDelete = () => {
    setShowModal(false);
    deleteJobOffer(data.id);
    navigation.pop();
  };
  const cancelDelete = () => setShowModal(false);

  const start = moment(data.startDate).format("DD MMM");

  const end = moment(data.endDate).format("DD MMM");

  return (
    <MainHeader.goBackOnly
      headerStyle={styles.container}
      goBackButtonStyle={styles.goBackButton}
      colorIcon={Colors.main_white}
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
        <Image source={{ uri: data.company.logo }} style={styles.companyLogo} />
        <Typography type="l_bold" typographyStyle={styles.title}>
          {data.title}
        </Typography>

        <View style={styles.otherInfosContainer}>
          {[
            { name: "enviroment", text: data.company.location },
            {
              name: "calendar",
              text: start + " - " + end,
            },
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
      <Button buttonStyle={styles.rightActionButton} onPress={deleteJobModal}>
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
    zIndex: -1,
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
    justifyContent: "center",
    justifyContent: "space-between",
    backgroundColor: `${Colors.main_white}70`,
    borderRadius: 50,
    paddingHorizontal: 8,
    margin: 6,
    overflow: "hidden",
    maxWidth: 140,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 28,
    color: Colors.main_white,
    marginLeft: 6,
  },
});
