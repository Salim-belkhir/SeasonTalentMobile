import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import MainHeader from "../MainHeader";
import Typography from "../Typography";
import CreateInputFields from "./CreateInputFields";

const CreateCompanieLayout = ({ dataToUpdate, isPrincipal }) => {
  return (
    <View>
      {dataToUpdate ? (
        <MainHeader.goBackOnly
          headerStyle={styles.headerStyle}
          goBackButtonStyle={styles.goBackButtonStyle}
          colorIcon={Colors.main_black}
        >
          <Typography type="l_bold" typographyStyle={styles.title}>
            {dataToUpdate.name}
          </Typography>
        </MainHeader.goBackOnly>
      ) : (
        <MainHeader.basicHeader headerStyle={styles.basicHeader} />
      )}

      <CreateInputFields dataToUpdate={dataToUpdate} isPrincipal={isPrincipal} />
    </View>
  );
};

export default CreateCompanieLayout;

const styles = StyleSheet.create({
  basicHeader: {
    paddingLeft: 23,
    paddingRight: 23,
  },
  headerStyle: {
    flexDirection: "row",
    backgroundColor: Colors.pure_white,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 12,
  },
  goBackButtonStyle: {
    marginLeft: 12,
  },
  title: {
    fontSize: 24,
    lineHeight: 28,
  },
});
