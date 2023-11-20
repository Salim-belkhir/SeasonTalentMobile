import { StyleSheet, View } from "react-native";
import MainHeader from "../MainHeader";
import CreateInputFields from "./CreateInputFields";

const CreateCompanieLayout = ({ dataToUpdate }) => {
  return (
    <View>
      <MainHeader.basicHeader />
      <CreateInputFields dataToUpdate={dataToUpdate} />
    </View>
  );
};

export default CreateCompanieLayout;

const styles = StyleSheet.create({});
