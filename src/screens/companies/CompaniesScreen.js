import { useCallback, useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import {
  DefaultLayout,
  FlatList,
  Icon,
  Loading,
  MainHeader,
  NavigatorButton,
  Typography,
} from "~/components";
import { companiesActions } from "~/redux/actions";
import { Colors } from "~/theme";

// Define mapDispatchToProps function to map Redux actions to component props
const mapDispatchToProps = {
  getCompanies: companiesActions.fetchCompanies,
};

// Define mapStateToProps function to map Redux state to component props
const mapStateToProps = (state) => ({
  companies: state.companies.companies,
  principalCompany: state.companies.principalCompany,
});

// Define CompaniesScreen component
const CompaniesScreen = ({ navigation, companies, principalCompany }) => {
  // Define state variables
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [data, setData] = useState([]);
  const [principalCompanyData, setPrincipalCompanyData] = useState(null);

  // Define function to handle navigation to Add Company screen
  const handleNavigateToAddCompany = () => {
    navigation.navigate("CompanyCreation");
  };

  // Define function to handle navigation to Company Details screen
  const handleNavigateToCompanyDetails = (item, principal) => {
    navigation.navigate("CompanyDetails", {
      data: item,
      isPrincipal: principal,
    });
  };

  // Define useEffect hook to set state variables after 1 second
  useEffect(() => {
    setIsInitialLoading(true);
    setTimeout(() => {
      setData(companies);
      setPrincipalCompanyData(principalCompany);
      setIsInitialLoading(false);
    }, 1000);
  }, [companies, principalCompany]);

  // Define useCallback hook to swap principal company with another company
  const swapPrincipalCompany = useCallback(
    (item) => {
      const index = data.findIndex((i) => i.id === item.id);
      const principalCompanyIndex = data.findIndex(
        (i) => i.id === principalCompanyData.id
      );
      const newData = [...data];
      newData[index] = principalCompanyData;
      newData[principalCompanyIndex] = item;
      setData(newData);
      setPrincipalCompanyData(item);
    },
    [data, principalCompanyData]
  );

  // Render component
  return (
    <DefaultLayout>
      <>
        {/* Render header */}
        <Header
          handleNavigateToAddCompany={handleNavigateToAddCompany}
          principalCompanyData={principalCompanyData}
          handleNavigateToCompanyDetails={handleNavigateToCompanyDetails}
        />

        {/* Render loading animation or company list */}
        {isInitialLoading ? (
          <Loading
            height={200}
            width={200}
            show={isInitialLoading}
            lottieStyle={styles.loadingContainer}
          />
        ) : (
          <CompanyList
            data={data}
            swapPrincipalCompany={swapPrincipalCompany}
            handleNavigateToCompanyDetails={handleNavigateToCompanyDetails}
          />
        )}
      </>
    </DefaultLayout>
  );
};

// Define Header component
const Header = ({
  handleNavigateToAddCompany,
  principalCompanyData,
  handleNavigateToCompanyDetails,
}) => {
  return (
    <View style={styles.header}>
      {/* Render main header */}
      <MainHeader />

      {/* Render button to navigate to Add Company screen */}
      <NavigatorButton
        label="Créer un établissement"
        leftIcon="plus"
        navigate={handleNavigateToAddCompany}
      />

      {/* Render title for principal company */}
      <Typography type="l_bold" typographyStyle={styles.currentCompanyTitle}>
        Votre Établissement Principal
      </Typography>

      {/* Render principal company details */}
      <PrincipalCompany
        principalCompanyData={principalCompanyData}
        handleNavigateToCompanyDetails={handleNavigateToCompanyDetails}
      />

      {/* Render title for other companies */}
      <Typography type="l_bold" typographyStyle={styles.currentCompanyTitle}>
        Autres Établissements
      </Typography>
    </View>
  );
};

// Define PrincipalCompany component
const PrincipalCompany = ({
  principalCompanyData,
  handleNavigateToCompanyDetails,
}) => {
  return (
    <TouchableOpacity
      style={styles.principalCompanyContainer}
      onPress={() => handleNavigateToCompanyDetails(principalCompanyData, true)}
    >
      {/* Render principal company logo */}
      <Image
        source={{ uri: principalCompanyData?.logo }}
        style={styles.principalCompanyLogo}
      />

      {/* Render principal company details */}
      <View style={styles.principalCompanyDetails}>
        <Typography type="l_bold" typographyStyle={styles.companyName}>
          {principalCompanyData?.name}
        </Typography>
        <Typography type="s_medium" typographyStyle={styles.companyAddress}>
          <Icon name="enviroment" size={14} color={Colors.primary_color} />{" "}
          {principalCompanyData?.address}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

// Define CompanyList component
const CompanyList = ({
  data,
  swapPrincipalCompany,
  handleNavigateToCompanyDetails,
}) => {
  return (
    <View style={styles.container}>
      {/* Render FlatList of companies */}
      <FlatList
        items={data}
        swapItem={swapPrincipalCompany}
        type="companyItems"
        onPressedItem={(item) => handleNavigateToCompanyDetails(item, false)}
        listStyle={styles.companiesList}
        itemsStyle={styles.companyItem}
      />
    </View>
  );
};

// Connect CompaniesScreen component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesScreen);

// Define styles for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
  header: {
    paddingHorizontal: 23,
    paddingBottom: 15,
    backgroundColor: Colors.pure_white,
  },
  currentCompanyTitle: {
    marginTop: 19,
    fontSize: 16,
  },
  principalCompanyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: `${Colors.primary_color}33`,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  principalCompanyLogo: {
    width: 53,
    height: 43,
    resizeMode: "contain",
    borderRadius: 9,
  },
  principalCompanyDetails: {
    marginLeft: 20,
    width: "80%",
  },
  companyName: {},
  companyAddress: {
    marginTop: 5,
    color: Colors.primary_color,
  },

  companiesList: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  companyItem: {
    marginBottom: 20,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
});
