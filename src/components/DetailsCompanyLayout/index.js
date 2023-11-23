import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { companiesActions, jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";
import FlatList from "../FlatList";
import Loading from "../Loading";
import MainHeader from "../MainHeader";
import Typography from "../Typography";
import ActionsUD from "./ActionsUD";
import Informations from "./Informations";

const mapDispatchToProps = {
  deleteCompany: companiesActions.deleteCompany,
  fetchJobOfferByCompanyId: jobOfferActions.fetchJobOfferByCompanyId,
};

const mapStateToProps = (state) => ({
  jobOffers: state.jobOffers.jobOffersByCompanyId,
});

const DetailsCompanyLayout = ({
  company,
  deleteCompany,
  isPrincipal,
  fetchJobOfferByCompanyId,
  jobOffers,
}) => {
  const [loadingJobOffers, setLoadingJobOffers] = useState(false);

  useEffect(() => {
    if (company) {
      setLoadingJobOffers(true);
      setTimeout(() => {
        fetchJobOfferByCompanyId(company.id);
        setLoadingJobOffers(false);
      }, 1000);
    }
  }, [company]);

  return (
    <View style={styles.container}>
      <MainHeader.goBackOnly
        headerStyle={styles.headerStyle}
        goBackButtonStyle={styles.goBackButtonStyle}
        colorIcon={Colors.main_black}
      >
        <Typography type="l_bold" typographyStyle={styles.title}>
          {company.name}
        </Typography>
      </MainHeader.goBackOnly>

      <ActionsUD company={company} deleteCompany={deleteCompany} />
      <Informations
        address={company.address}
        contact={company.contact}
        uploadedFiles={company.proofs}
        isPrincipal={isPrincipal}
      />

      <View style={{ flex: 1 }}>
        <Typography type="l_bold" typographyStyle={styles.relatedOffers}>
          Les offres d’emplois liées
        </Typography>
        {loadingJobOffers ? (
          <Loading
            height={100}
            width={100}
            show={loadingJobOffers}
            lottieStyle={styles.lottie}
          />
        ) : (
          <FlatList items={jobOffers} type="horizontal" />
        )}
      </View>
    </View>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsCompanyLayout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
  headerStyle: {
    flexDirection: "row",
    backgroundColor: Colors.pure_white,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 12,
  },
  goBackButtonStyle: {
    marginLeft: 12,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
  },
  relatedOffers: {
    color: Colors.main_black,
    fontSize: 18,
    marginTop: 20,
  },
  lottie: {
    justifyContent: "flex-start",
    paddingTop: 26,
  },
});
