import { StyleSheet, View } from "react-native";
import { DefaultLayout } from "~/components";
import CreateCompanieLayout from "~/components/CreateCompanyLayout";
import { Colors } from "~/theme";

const CreateCompanyScreen = ({ route }) => {
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <CreateCompanieLayout
          dataToUpdate={route.params?.dataToUpdate}
          isPrincipal={route.params?.isPrincipal}
        />
      </View>
    </DefaultLayout>
  );
};

export default CreateCompanyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_white,
  },
});
