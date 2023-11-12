import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import {
  BottomSheetFilters,
  DefaultLayout,
  FlatList,
  Loading,
  MainHeader,
  NavigatorButton,
  SearchJobOffer,
  Typography,
} from "~/components";
import { jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";

const mapDispatchToProps = {
  filterJobOffers: jobOfferActions.filterJobOffers,
};
const mapStateToProps = (state) => ({
  jobOffers: state.jobOffers.jobOffers,
  filteredJobOffers: state.jobOffers.filteredJobOffers,
});

const DEFAULT_FILTERS = {
  searchWords: [],
  startDate: moment().add(-1, "years").format("YYYY-MM-DD"),
  endDate: moment().add(1, "years").format("YYYY-MM-DD"),
  minSalary: 750,
  maxSalary: 1750,
};

const JobOffersScreen = ({
  navigation,
  filteredJobOffers,
  filterJobOffers,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [filterBy, setFilterBy] = useState();
  const [totalAppliedFilter, setTotalAppliedFilter] = useState(0);

  const handleSearchJobOffer = () => {
    Keyboard.dismiss();
    navigation.push("EmploisRecherche");
  };

  const handleNavigateToAddJobOffer = () => {
    navigation.push("EmploisAjouter");
  };

  const handleNavigateToJobOfferDetails = (item) => {
    navigation.navigate("EmploisDetails", { item });
  };

  const closeFilter = () => {
    setShowFilter(false);
  };

  const refetchWithFilter = useCallback(() => {
    // we need to set up a default filter because when the first time that the job offers screen is rendered,
    // the filterBy state is not yet set
    const filters = filterBy || DEFAULT_FILTERS;
    filterJobOffers(filters);
  }, [filterBy]);

  useEffect(() => {
    refetchWithFilter();
    setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);
  }, [refetchWithFilter]);

  const handleFilterChange = (filters) => {
    setFilterBy(filters);
    setIsInitialLoading(true);
  };

  return (
    <DefaultLayout navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainHeader navigation={navigation} />
          <SearchJobOffer
            action={handleSearchJobOffer}
            setShowFilter={setShowFilter}
            showFilterButton={true}
          />
          <NavigatorButton
            label="Créer une offre d'emploi"
            leftIcon="plus"
            navigate={handleNavigateToAddJobOffer}
          />
          <Typography type="l_bold" typographyStyle={styles.currentOffersTitle}>
            Offres d'emploi actuelles
          </Typography>
        </View>
        {isInitialLoading ? (
          <Loading
            height={200}
            width={200}
            show={isInitialLoading}
            lottieStyle={styles.loadingContainer}
          />
        ) : (
          <FlatList
            items={filteredJobOffers}
            type="horizontalList"
            onPressedItem={handleNavigateToJobOfferDetails}
            listStyle={styles.jobOffersList}
            itemsStyle={styles.jobOfferItem}
          />
        )}
        <BottomSheetFilters
          open={showFilter}
          onClose={closeFilter}
          onApplyFilter={handleFilterChange}
          onTotalFilterAppliedChange={(total) => {
            setTotalAppliedFilter(total);
          }}
        />
      </View>
    </DefaultLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobOffersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
  currentOffersTitle: {
    marginTop: 19,
    fontSize: 16,
  },
  header: {
    paddingHorizontal: 23,
    paddingBottom: 15,
    backgroundColor: Colors.pure_white,
  },
  jobOffersList: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 19,
  },
  jobOfferItem: {
    borderRadius: 34,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
});
