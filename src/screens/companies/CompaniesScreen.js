import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
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

const mapDispatchToProps = {
  getCompanies: companiesActions.fetchCompanies,
};

const mapStateToProps = (state) => ({
  companies: state.companies.companies,
  principalCompany: state.companies.principalCompany,
});

const CompaniesScreen = ({ navigation, companies, principalCompany }) => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [data, setData] = useState([]);
  const [principalCompanyData, setPrincipalCompanyData] = useState(null);
  const handleNavigateToAddCompany = () => {
    navigation.navigate("CreateCompany");
  };

  const handleNavigateToCompanyDetails = (item) => {
    navigation.navigate("CompanyDetails", { item });
  };

  useEffect(() => {
    setTimeout(() => {
      setData(companies);
      setPrincipalCompanyData(principalCompany);
      setIsInitialLoading(false);
    }, 1000);
  }, []);

  return (
    <DefaultLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainHeader />
          <NavigatorButton
            label="Créer un établissement"
            leftIcon="plus"
            navigate={handleNavigateToAddCompany}
          />
          <Typography
            type="l_bold"
            typographyStyle={styles.currentCompanyTitle}
          >
            Votre Établissement Principal
          </Typography>
          <View style={styles.principalCompanyContainer}>
            <Image
              source={{ uri: principalCompanyData?.logo }}
              style={styles.principalCompanyLogo}
            />
            <View style={styles.principalCompanyDetails}>
              <Typography type="l_medium" typographyStyle={styles.companyName}>
                {principalCompanyData?.name}
              </Typography>
              <Typography
                type="s_medium"
                typographyStyle={styles.companyAddress}
              >
                <Icon
                  name="enviroment"
                  size={14}
                  color={Colors.primary_color}
                />{" "}
                {principalCompanyData?.address}
              </Typography>
            </View>
          </View>

          <Typography
            type="l_bold"
            typographyStyle={styles.currentCompanyTitle}
          >
            Autres Établissements
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
            items={data}
            type="companyItems"
            onPressedItem={handleNavigateToCompanyDetails}
            listStyle={styles.companiesList}
            itemsStyle={styles.companyItem}
          />
        )}
      </View>
    </DefaultLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesScreen);

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
  },
  principalCompanyDetails: {
    marginLeft: 20,
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
