import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { companiesActions } from "~/redux/actions";
import MainHeader from "../MainHeader";
import CreateInputFields from "./CreateInputFields";

const CreateCompanieLayout = ({
  dataToUpdate,
}) => {
  return (
    <View>
      <MainHeader.basicHeader />
      <CreateInputFields dataToUpdate={dataToUpdate} />
    </View>
  );
};

export default CreateCompanieLayout;

const styles = StyleSheet.create({});
