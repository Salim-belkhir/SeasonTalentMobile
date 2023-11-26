import moment from "moment";
import { useEffect, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import {
  BottomSheetFilters,
  DefaultLayout,
  FlatList,
  Loading,
  MainHeader,
  NavigatorButton,
  SearchBar,
  Typography,
} from "~/components";
import { jobOfferActions } from "~/redux/actions";
import { Colors } from "~/theme";

const mapDispatchToProps = {
  filterJobOffers: jobOfferActions.filterJobOffers,
};
const mapStateToProps = (state) => ({
  filteredJobOffers: state.jobOffers.filteredJobOffers,
  jobOffers: state.jobOffers.jobOffers,
});

const DEFAULT_FILTERS = {
  searchWord: {
    id: 1,
    label: "",
  },
  searchWords: [],
  startDate: moment().format("YYYY-MM-DD"), // set the date of today
  endDate: moment().add(1, "years").format("YYYY-MM-DD"),
  location: "",
  minSalary: 750,
  maxSalary: 1750,
};

const JobOffersScreen = ({
  navigation,
  filteredJobOffers,
  filterJobOffers,
  jobOffers,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [filterBy, setFilterBy] = useState(DEFAULT_FILTERS);
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

  useEffect(() => {
    setIsInitialLoading(true);
    setTimeout(() => {
      filterJobOffers(filterBy);
      setIsInitialLoading(false);
    }, 1000);
  }, [jobOffers]);

  useEffect(() => {
    setTimeout(() => {
      filterJobOffers(filterBy);
      setIsInitialLoading(false);
    }, 1500);
  }, [filterBy]);

  const onApplyFilters = (filters) => {
    // console.log("onApplyFilters --> ", filters);
    setFilterBy(filters);
    setIsInitialLoading(true);
  };

  return (
    <DefaultLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainHeader navigation={navigation} />
          <SearchBar
            action={handleSearchJobOffer}
            setShowFilter={setShowFilter}
            showFilterButton={true}
            searchType="emploi"
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
          />
        )}
        <BottomSheetFilters
          open={showFilter}
          onClose={closeFilter}
          onApplyFilters={onApplyFilters}
          onTotalFilterAppliedChange={(total) => {
            setTotalAppliedFilter(total);
          }}
          defaultFilters={filterBy}
          type="jobOffers"
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
    paddingBottom: 20,
    paddingHorizontal: 19,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
});
