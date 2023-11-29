import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { candidatesActions, jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";
import AlertModal from "../Modal";
import DetailsFooter from "./DetailsFooter";
import DetailsHeader from "./DetailsHeader";
import DetailsTabContent from "./DetailsTabContent";

// Define mapDispatchToProps to connect createJobOffer action to the component
const mapDispatchToProps = {
  deleteJobOffer: jobOfferActions.deleteJobOffer,
  addCandidateToFavorite: candidatesActions.addCandidateToFavorite,
  deleteCandidateFromFavorite: candidatesActions.deleteCandidateFromFavorite,
  affectCandidateToJobOffer: candidatesActions.affectCandidateToJobOffer,
};

const mapStateToProps = (state) => ({
  jobOffers: state.jobOffers.jobOffers,
});

const DetailsLayout = ({
  data,
  type,
  recommend,
  deleteJobOffer,
  addCandidateToFavorite,
  deleteCandidateFromFavorite,
  affectCandidateToJobOffer,
  jobOffers,
}) => {
  if (type === "candidate" && recommend) {
    data = {
      ...data.candidate,
      jobOffer: data.jobOffer,
    };
  }

  const [showModal, setShowModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(() => () => {});
  const [titleModal, setTitleModal] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [typeModal, setTypeModal] = useState("error");
  const navigation = useNavigation();

  const handleHireCandidate = (candidateId, jobOffer) => {
    setShowModal(true);
    setTitleModal("Embaucher");
    setTypeModal("confirm");
    setMessageModal(
      "Voulez-vous embaucher ce candidat pour le poste de " +
        jobOffer.title +
        " ?"
    );
    setConfirmAction(() => () => {
      affectCandidateToJobOffer({
        candidateId: candidateId,
        jobOffer: jobOffer,
      });
      deleteJobOffer(jobOffer.id);
      navigation.goBack();
    });
  };

  const handleFavoriteCandidate = (item) => {
    if (item.isFavorite) {
      deleteCandidateFromFavorite(item.id);
    } else {
      addCandidateToFavorite(item.id);
    }
  };

  const deleteJobModal = (id) => {
    setShowModal(true);
    setTypeModal("error");
    setTitleModal("Supprimer l'offre d'emploi");
    setMessageModal(
      "Êtes-vous sûr de vouloir supprimer cette offre d'emploi ?"
    );
    setConfirmAction(() => () => {
      deleteJobOffer(id);
      navigation.goBack();
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.main_white,
      }}
    >
      <DetailsHeader
        data={data}
        type={type}
        handleFavoriteCandidate={handleFavoriteCandidate}
        deleteJobModal={deleteJobModal}
      />
      <DetailsTabContent data={data} type={type} />
      <DetailsFooter
        data={data}
        type={type}
        recommend={recommend}
        handleHireCandidate={handleHireCandidate}
        jobOffers={jobOffers}
      />
      <AlertModal
        visible={showModal}
        title={titleModal}
        message={messageModal}
        onClose={() => setShowModal(false)}
        type={typeModal}
        action={confirmAction}
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsLayout);
