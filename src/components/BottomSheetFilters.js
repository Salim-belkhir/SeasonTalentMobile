import RangeSlider from "@jesster2k10/react-native-range-slider";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useCallback, useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "~/theme";
import BottomSheet from "./BottomSheet";
import Button from "./Button";
import FlatList from "./FlatList";
import Icon from "./Icon";
import TextInput from "./TextInput";
import Typography from "./Typography";

const Header = ({ title, onClose, onApply }) => {
  return (
    <View style={styles.header}>
      <Button
        hideIcon
        label="Fermer"
        buttonStyle={styles.closeButton}
        onPress={onClose}
      >
        <Icon name="close" size={26} color={Colors.primary_color} />
      </Button>
      <Typography type="l_bold" typographyStyle={styles.title}>
        {title}
      </Typography>

      <Button
        hideIcon
        label="Appliquer"
        buttonStyle={styles.closeButton}
        onPress={onApply}
      >
        <Icon name="check" size={26} color={Colors.primary_color} />
      </Button>
    </View>
  );
};

const SearchKeywords = ({ values, setValues }) => {
  const handleAddSearchWord = () => {
    if (values.searchWord.label !== "") {
      setValues({
        ...values,
        searchWords: [
          ...values.searchWords,
          {
            label: values.searchWord,
            id: values.searchWords.length + 1,
          },
        ],
        searchWord: {
          label: "",
          id: "",
        },
      });
    }
  };

  return (
    <View style={styles.searchKeywordsContainer}>
      <TextInput
        placeholder="Ajouter un avantage ou une compétence"
        leftIcon="search1"
        inputStyle={styles.searchKeywordsInput}
        inputTypographyStyle={styles.searchKeywordsInputTypography}
        onChangeText={(value) => {
          setValues({ ...values, searchWord: value });
        }}
        value={values.searchWord.label}
        returnKeyType="next"
        onSubmitEditing={handleAddSearchWord}
      />
      <FlatList
        items={values.searchWords}
        type={"simpleItems"}
        listStyle={[{ marginTop: values.searchWords.length > 0 ? 15 : 0 }]}
        itemsStyle={styles.searchKeywordsItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        onPressedItem={(item) => {
          setValues({
            ...values,
            searchWords: values.searchWords.filter(
              (searchWord) => searchWord.id !== item.id
            ),
          });
        }}
      />
    </View>
  );
};

const DateTimePickers = ({ values }) => {
  return (
    <View style={styles.dateTimePickersContainer}>
      <View
        style={[
          styles.dateTimePickerContainer,
          values.startDate && {
            borderColor: Colors.primary_color,
          },
        ]}
      >
        <Icon
          name="calendar"
          size={20}
          color={values.startDate ? Colors.primary_color : Colors.main_grey}
        />
        <Typography
          type="l_regular"
          typographyStyle={[
            styles.dateTimePickerLabel,
            values.startDate && {
              color: Colors.primary_color,
            },
          ]}
        >
          Date :
        </Typography>
        <RNDateTimePicker
          value={values.startDate ? new Date(values.startDate) : new Date()}
          onChange={(event, selectedDate) => {}}
          style={styles.dateTimePicker}
          textColor={Colors.primary_color}
          accentColor={Colors.primary_color}
          locale="fr-FR"
        />
        <Typography
          type="l_regular"
          typographyStyle={[
            styles.dateTimePickerLabel,
            values.startDate && {
              color: Colors.primary_color,
            },
          ]}
        >
          -
        </Typography>
        <RNDateTimePicker
          value={
            // if value is null, set the current date of one year after t
            values.endDate
              ? new Date(values.endDate)
              : new Date(new Date().setFullYear(new Date().getFullYear() + 1))
          }
          onChange={(event, selectedDate) => {}}
          style={styles.dateTimePicker}
          textColor={Colors.primary_color}
          accentColor={Colors.primary_color}
          locale="fr-FR"
        />
      </View>
    </View>
  );
};

const Location = ({ values, setValues }) => {
  return (
    <View style={styles.locationContainer}>
      <Icon name="enviromento" size={20} color={Colors.main_grey} />
      <Typography type="l_regular" typographyStyle={styles.locationLabel}>
        Localisation :
      </Typography>
      <TextInput
        placeholder="Ajouter une localisation"
        inputStyle={styles.locationInput}
        inputTypographyStyle={styles.locationInputTypography}
        onChangeText={(value) => {
          setValues({ ...values, location: value });
        }}
        value={values.location}
        returnKeyType="next"
        onSubmitEditing={() => {}}
      />
    </View>
  );
};

const Salary = ({ values, onChange }) => {
  return (
    <View style={styles.salaryContainer}>
      <View style={styles.salaryLabelContainer}>
        <Typography type="l_medium" typographyStyle={styles.salaryLabel}>
          Échelle des salaires
        </Typography>
        <Typography type="l_regular" typographyStyle={styles.salaryText}>
          le salaire moyen est de : {""}
          <Typography type="l_bold">
            {values.salary ? values.salary : "0"} €/mois
          </Typography>
        </Typography>
      </View>
      <View style={styles.salaryRangeContainer}>
        <RangeSlider
          type="range" // ios only
          min={0}
          max={2500}
          selectedMinimum={750} // ios only
          selectedMaximum={1700} // ios only
          tintColor={Colors.input_gray}
          handleColor={Colors.primary_color}
          handlePressedColor={Colors.primary_color}
          tintColorBetweenHandles={Colors.primary_color}
          onChange={onChange}
          minLabelColor={Colors.main_black}
          maxLabelColor={Colors.main_black}
          lineHeight={4}
          maxLabelFontSize={16}
          minLabelFontSize={16}
        />
      </View>
    </View>
  );
};

const BottomSheetFilters = ({ onClose = () => {}, open, setOpen }) => {
  const [snapToIndex, setSnapToIndex] = useState(-1);

  useEffect(() => {
    if (open) {
      setSnapToIndex(0);
    } else {
      setSnapToIndex(-1);
    }
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [onClose]);

  const [values, setValues] = useState({
    searchWord: {
      label: "",
      id: "",
    },
    searchWords: [],
    startDate: null,
    endDate: null,
    location: "",
    salary: 2500,
    minSalary: 0,
    maxSalary: 5000,
  });

  const handleSalaryChange = (min, max) => {
    setValues({
      ...values,
      minSalary: min,
      maxSalary: max,
      salary: (min + max) / 2,
    });
  };

  return (
    <BottomSheet
      open={open}
      onClose={handleClose}
      snapPoints={["85%"]}
      snapToIndex={snapToIndex}
      enableModalWrapper
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header title="Filtres" onClose={handleClose} onApply={handleClose} />

          <SearchKeywords values={values} setValues={setValues} />

          <View style={styles.filterInputsContainer}>
            <DateTimePickers values={values} />
            <Location values={values} setValues={setValues} />
          </View>

          <Salary values={values} onChange={handleSalaryChange} />
        </View>
      </TouchableWithoutFeedback>
    </BottomSheet>
  );
};

export default BottomSheetFilters;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Colors.input_gray,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
  },
  closeButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  searchKeywordsContainer: {
    marginTop: 24,
  },
  searchKeywordsInput: {
    paddingHorizontal: 20,
    height: 52,
    borderRadius: 12,
  },
  searchKeywordsInputTypography: {
    fontSize: 13,
  },
  searchKeywordsItems: {
    marginTop: 15,
    backgroundColor: `${Colors.primary_color}33`,
    borderRadius: 12,
  },
  filterInputsContainer: {
    marginTop: 24,
  },
  dateTimePickersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: Colors.input_gray,
    borderTopWidth: 1,
  },
  dateTimePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0,
    paddingVertical: 16,
    marginTop: 10,
    width: "100%",
  },
  dateTimePickerLabel: {
    color: Colors.main_grey,
  },
  dateTimePicker: {},
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: Colors.medium_grey,
    borderTopWidth: 1,
    paddingVertical: 16,
    marginTop: 10,
    width: "100%",
  },
  locationInput: {
    paddingHorizontal: 20,
    height: 52,
    borderWidth: 0,
    width: "65%",
    backgroundColor: Colors.input_gray,
  },
  locationInputTypography: {
    fontSize: 13,
  },
  locationLabel: {
    color: Colors.main_grey,
  },
  salaryContainer: {
    borderTopColor: Colors.input_gray,
    borderTopWidth: 1,
  },
  salaryLabelContainer: {
    marginTop: 24,
  },
  salaryLabel: {
    color: Colors.dark_grey,
  },
  salaryText: {
    color: Colors.main_grey,
    marginTop: 10,
  },
  salaryRangeContainer: {
    marginTop: 25,
  },
});
