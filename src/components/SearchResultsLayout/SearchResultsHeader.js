import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

const SearchResultsHeader = ({ searchTitle, nbResults, setShowFilter }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Button
          hideIcon
          buttonStyle={styles.goBackButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="left" size={24} color={Colors.main_black} />
        </Button>
        <Typography type="l_bold" typographyStyle={styles.title}>
          {searchTitle}
        </Typography>
      </View>
      <View style={styles.nbResultsContainer}>
        <Typography type="l_medium" typographyStyle={styles.nbResults}>
          {nbResults} {nbResults > 1 ? "Offres trouvées" : "Offre trouvée"}
        </Typography>
        <Button
          hideIcon
          buttonStyle={styles.button}
          onPress={() => setShowFilter(true)}
        >
          <Icon name="filter" size={28} color={Colors.primary_color} />
        </Button>
      </View>
    </View>
  );
};

export default SearchResultsHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pure_white,
    width: "100%",
    height: "20%",
    paddingHorizontal: 23,
    justifyContent: "flex-end",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Colors.main_grey,
  },
  goBackButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    color: Colors.main_black,
    marginLeft: 17,
  },
  nbResultsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  nbResults: {
    fontSize: 16,
    color: Colors.primary_color,
    fontFamily: "Montserrat-semiBold",
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
});
