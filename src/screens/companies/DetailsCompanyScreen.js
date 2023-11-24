import { StyleSheet } from "react-native";
import { DefaultLayout, DetailsCompanyLayout } from "~/components";

const DetailsCompanyScreen = ({ route }) => {
  return (
    <DefaultLayout>
      {/* <CreateCompanieLayout dataToUpdate={route.params?.data} /> */}
      {/* we add the list of related job offers here */}
      <DetailsCompanyLayout
        company={route.params?.data}
        isPrincipal={route.params?.isPrincipal}
      />
    </DefaultLayout>
  );
};

export default DetailsCompanyScreen;

const styles = StyleSheet.create({});
