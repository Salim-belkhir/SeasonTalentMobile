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

const DetailsLayout = ({
  data,
  type,
  recommend,
  deleteJobOffer,
  addCandidateToFavorite,
  deleteCandidateFromFavorite,
  affectCandidateToJobOffer,
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
        deleteJobOffer={deleteJobOffer}
        addCandidateToFavorite={addCandidateToFavorite}
        deleteCandidateFromFavorite={deleteCandidateFromFavorite}
        setShowModal={setShowModal}
        setConfirmAction={setConfirmAction}
        setTitleModal={setTitleModal}
        setMessageModal={setMessageModal}
        setTypeModal={setTypeModal}
      />
      <DetailsTabContent data={data} type={type} />
      <DetailsFooter
        data={data}
        type={type}
        recommend={recommend}
        affectCandidateToJobOffer={affectCandidateToJobOffer}
        setShowModal={setShowModal}
        setConfirmAction={setConfirmAction}
        setTitleModal={setTitleModal}
        setMessageModal={setMessageModal}
        setTypeModal={setTypeModal}
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

export default connect(null, mapDispatchToProps)(DetailsLayout);
