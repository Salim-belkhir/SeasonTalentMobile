import moment from "moment";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";
import Icon from "../Icon";
import MainHeader from "../MainHeader";
import Typography from "../Typography";

const formatDate = (date) => {
  return moment(date).format("DD MMM");
};

const DetailsHeader = ({
  data,
  type,
  handleFavoriteCandidate = () => {},
  deleteJobModal = () => {},
}) => {
  const [informations, setInformations] = useState(
    type === "candidate"
      ? {
          id: data.id,
          image: data.image,
          title: data.name,
          location: data.location,
          start: data.availability.startDate
            ? formatDate(data.availability.startDate)
            : "Non Disponible",
          end: data.availability.endDate
            ? formatDate(data.availability.endDate)
            : "",
          salary:
            data.experiences.length > 0
              ? data.experiences[0].joOffer.company.name
              : "Aucune",
          isFavorite: data.isFavorite,
          location: data.location,
        }
      : {
          id: data.id,
          image: data.company.logo,
          title: data.title,
          location: data.company.location,
          start: formatDate(data.startDate),
          end: formatDate(data.endDate),
          salary: data.salary,
          location: data.company.location,
        }
  );

  return (
    <MainHeader.goBackOnly
      headerStyle={styles.container}
      goBackButtonStyle={styles.goBackButton}
      colorIcon={Colors.main_white}
    >
      <Image
        source={require("~/assets/images/background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.headerInformationsContainer}>
        <Image
          source={{ uri: informations.image }}
          style={[
            styles.companyLogo,
            type === "candidate" && { borderRadius: 20 },
          ]}
        />
        <Typography type="l_bold" typographyStyle={styles.title}>
          {informations.title}
        </Typography>

        <View style={styles.otherInfosContainer}>
          {[
            { name: "enviroment", text: informations.location },
            {
              name: "calendar",
              text: informations.start + " - " + informations.end,
            },
            { name: "wallet", text: informations.salary },
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
      {type === "jobOffer" ? (
        <Button
          buttonStyle={styles.rightActionButton}
          onPress={() => deleteJobModal(informations.id)}
        >
          <Icon name="delete" size={30} color={Colors.error_color} />
        </Button>
      ) : (
        <Button
          hideIcon
          onPress={() => {
            handleFavoriteCandidate({
              id: informations.id,
              isFavorite: informations.isFavorite,
            });

            setInformations({
              ...informations,
              isFavorite: !informations.isFavorite,
            });
          }}
          buttonStyle={styles.rightActionButton}
        >
          <Icon
            name={informations.isFavorite ? "heart" : "hearto"}
            size={30}
            color={
              informations.isFavorite ? Colors.error_color : Colors.main_white
            }
          />
        </Button>
      )}
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
    marginHorizontal: 3,
  },
});
