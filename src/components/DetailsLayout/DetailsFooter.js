import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";
import ItemFlatList from "../ItemFlatList";
import SelectDropdownGen from "../SelectDropDown";

const DetailsFooter = ({
  data,
  type,
  recommend,
  handleHireCandidate,
  jobOffers,
}) => {
  const navigation = useNavigation();
  const [dropRef, setDropRef] = useState(null);

  const handlePossibleToHireOffers = () => {
    const results = jobOffers.filter((jobOffer) => {
      return (
        // check only the date of start and end of the job offer and the availability of the candidate
        moment(jobOffer.startDate).isSameOrBefore(
          data.availability.startDate
        ) && moment(jobOffer.endDate).isSameOrAfter(data.availability.endDate)
      );
    });

    return results;
  };

  const [possibleJobOffers, setPossibleJobOffers] = useState(null);

  useEffect(() => {
    if (type === "candidate") {
      setPossibleJobOffers(handlePossibleToHireOffers());
    }
  }, [type]);

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
          onPress={() => handleHireCandidate(data.id, data.jobOffer)}
          hideIcon
          labelTypographyStyle={styles.labelTypographyStyle}
          buttonStyle={styles.buttonStyle}
        />
      ) : (
        <View style={{ marginBottom: 20 }}>
          <SelectDropdownGen
            setDropRef={setDropRef}
            data={possibleJobOffers}
            type="jobOffer"
            onSelect={(selectedItem) => {
              handleHireCandidate(data.id, selectedItem);
            }}
            displaySelectedItem={(selectedItem) => {
              return selectedItem.title;
            }}
            displayItemForSelection={(item) => {
              return (
                <ItemFlatList
                  item={item}
                  onPress={() => {
                    dropRef.current.closeDropdown();
                    handleHireCandidate(data.id, item);
                  }}
                />
              );
            }}
            selectorButtonStyle={styles.selectorButtonStyle}
            selectorbuttonTextStyle={styles.selectorbuttonTextStyle}
          />
        </View>
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
  dropDown: {},
});
