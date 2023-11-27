import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";
import SelectDropdownGen from "../SelectDropDown";

const DetailsFooter = ({
  data,
  type,
  recommend,
  handleHireCandidate,
  jobOffers,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {type === "jobOffer" ? (
        <Button
          label="Modifier l'offre"
          onPress={() => navigation.push("EmploisAjouter", { data })}
          hideIcon
          labelTypographyStyle={styles.labelTypographyStyle}
          buttonStyle={styles.buttonStyle}
        />
      ) : recommend ? (
        <Button
          label="Embaucher"
          onPress={handleHireCandidate(data)}
          hideIcon
          labelTypographyStyle={styles.labelTypographyStyle}
          buttonStyle={styles.buttonStyle}
        />
      ) : (
        <SelectDropdownGen
          data={jobOffers}
          type="jobOffer"
          onSelect={(jobOffer) => {
            console.log("jobOffer");
            // handleHireCandidate({
            //   ...data,
            //   jobOffer: jobOffer,
            // });
          }}
          displaySelectedItem={(selectedItem) => {
            return selectedItem.title;
          }}
          displayItemForSelection={(item) => {
            return item.title;
          }}
          selectorButtonStyle={styles.selectorButtonStyle}
          selectorbuttonTextStyle={styles.selectorbuttonTextStyle}
          dropdownStyle={styles.dropDown}
        />
      )}
    </View>
  );
};

export default DetailsFooter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
  labelTypographyStyle: {
    color: Colors.main_white,
  },
  buttonStyle: {
    marginBottom: 35,
  },
  selectorButtonStyle: {
    backgroundColor: Colors.primary_color,
    borderWidth: 0,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
  },
  selectorbuttonTextStyle: {
    color: Colors.main_white,
    fontFamily: "Montserrat-semiBold",
    fontSize: 14,
    textAlign: "left",
  },
  dropDown: {
   
  },
});
