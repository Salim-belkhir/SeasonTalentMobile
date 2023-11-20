import { StyleSheet, View } from "react-native";
import { CreateCompanieLayout, DefaultLayout } from "~/components";
import { Colors } from "~/theme";

const DetailsCompanyScreen = ({ route }) => {
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <CreateCompanieLayout dataToUpdate={route.params?.data} />
        {/* we add the list of related job offers here */}
      </View>
    </DefaultLayout>
  );
};

export default DetailsCompanyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: Colors.main_white,
  },
});
