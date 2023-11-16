import { StyleSheet, View } from "react-native";
import { DefaultLayout } from "~/components";
import CreateCompanieLayout from "~/components/CreateCompanieLayout";
import { Colors } from "~/theme";

const CreateCompanyScreen = ({ route }) => {
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <CreateCompanieLayout dataToUpdate={route.params?.data} />
      </View>
    </DefaultLayout>
  );
};

export default CreateCompanyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 23,
    paddingRight: 23,
    backgroundColor: Colors.main_white,
  },
});
