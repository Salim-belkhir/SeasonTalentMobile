import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";

const DetailsFooter = ({
  data,
  type,
  recommend,
  affectCandidateToJobOffer,
  setShowModal,
  setConfirmAction,
  setTitleModal,
  setMessageModal,
  setTypeModal,
}) => {
  const navigation = useNavigation();

  const handleHireCandidate = () => {
    setShowModal(true);
    setTitleModal("Embaucher");
    setTypeModal("confirm");
    setMessageModal(
      "Voulez-vous embaucher ce candidat pour le poste de " +
        data.jobOffer.title +
        " ?"
    );
    setConfirmAction(() => () => {
      affectCandidateToJobOffer(data.id, data.jobOffer.id);
      navigation.goBack();
    });
  };

  return (
    <View style={styles.container}>
      {type === "jobOffer" ? (
        <Button
          label="Modifier l'offre"
          onPress={() => navigation.push("EmploisAjouter", { data })}
          hideIcon
          labelTypographyStyle={styles.labelTypographyStyle}
          buttonStyle={styles.buttonStyle}
        />
      ) : recommend ? (
        <Button
          label="Embaucher"
          onPress={handleHireCandidate}
          hideIcon
          labelTypographyStyle={styles.labelTypographyStyle}
          buttonStyle={styles.buttonStyle}
        />
      ) : null}
    </View>
  );
};

export default DetailsFooter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
  labelTypographyStyle: {
    color: Colors.main_white,
  },
  buttonStyle: {
    marginBottom: 35,
  },
});
