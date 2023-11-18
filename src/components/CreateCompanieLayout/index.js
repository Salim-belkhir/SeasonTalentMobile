import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";
import MainHeader from "../MainHeader";
import CreateInputFields from "./CreateInputFields";
import LoadFiles from "./loadFiles";


const CreateCompanieLayout = () => {
  
  return (
    <View>
      <MainHeader.basicHeader />
      <CreateInputFields />
      <LoadFiles />
      <Button
        label="Créer un établissement"
        hideIcon
        buttonStyle={styles.buttonStyle}
        labelTypographyStyle={styles.labelTypographyStyle}
      />
    </View>
  );
};

export default CreateCompanieLayout;

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
  },
  labelTypographyStyle: {
    color: Colors.main_white,
  },
});
