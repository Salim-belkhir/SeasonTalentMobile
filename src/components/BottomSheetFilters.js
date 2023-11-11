import RangeSlider from "@jesster2k10/react-native-range-slider";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "~/theme";
import BottomSheet from "./BottomSheet";
import Button from "./Button";
import CalendarPicker from "./CalendarPicker";
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

const SearchKeywords = ({ values, onChange, onAdd, onRemove, clearAll }) => {
  return (
    <View style={styles.searchKeywordsContainer}>
      <TextInput
        placeholder="Ajouter un avantage ou une compétence"
        leftIcon="search1"
        inputStyle={styles.searchKeywordsInput}
        inputTypographyStyle={styles.searchKeywordsInputTypography}
        onChangeText={(value) => {
          onChange(value);
        }}
        value={values.searchWord.label}
        onSubmitEditing={() => {
          onAdd(values.searchWord);
        }}
        returnKeyType="next"
      />
      <FlatList
        items={values.searchWords}
        type={"simpleItems"}
        listStyle={[{ marginTop: values.searchWords.length > 0 ? 15 : 0 }]}
        itemsStyle={styles.searchKeywordsItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        onPressedItem={onRemove}
      />
      {/* add a button to clear all the items */}
      {values.searchWords.length > 0 && (
        <Button
          label="Effacer"
          buttonStyle={styles.clearButtonStyle}
          labelTypographyStyle={styles.clearButtonLabel}
          onPress={clearAll}
          hideIcon
        />
      )}
    </View>
  );
};

const DateTimePickers = ({ dates, handleOpenDatePicker }) => {
  return (
    <View style={styles.datePickerContainer}>
      <View style={styles.datePickerTitle}>
        <Icon name="calendar" size={20} color={Colors.main_grey} />
        <Typography
          type="l_regular"
          typographyStyle={styles.dateTimePickerLabel}
        >
          Date :
        </Typography>
      </View>

      <TouchableOpacity style={styles.datesButton}>
        <Typography type="l_regular" typographyStyle={styles.datesButtonLabels}>
          {dates.startDate
            ? moment(dates.startDate).format("DD MMM YYYY")
            : "Début"}
        </Typography>
        <Icon name="arrowright" size={20} color={Colors.primary_color} />
        <Typography type="l_regular" typographyStyle={styles.datesButtonLabels}>
          {dates.endDate
            ? moment(dates.endDate).format("DD MMM YYYY")
            : "Indéfini"}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

const Location = ({ location, onChange }) => {
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
        onChangeText={onChange}
        value={location}
        returnKeyType="next"
      />
    </View>
  );
};

const Salary = ({ salaryRange, onChange }) => {
  const [minSalary, setMinSalary] = useState(salaryRange.minSalary);
  const [maxSalary, setMaxSalary] = useState(salaryRange.maxSalary);

  return (
    <View style={styles.salaryContainer}>
      <View style={styles.salaryLabelContainer}>
        <Typography type="l_medium" typographyStyle={styles.salaryLabel}>
          Échelle des salaires
        </Typography>
        <Typography type="l_regular" typographyStyle={styles.salaryText}>
          le salaire moyen est de : {""}
          <Typography type="l_bold">
            {minSalary} € - {maxSalary} €
          </Typography>
        </Typography>
      </View>
      <View style={styles.salaryRangeContainer}>
        <RangeSlider
          type="range" // ios only
          min={0}
          max={2500}
          selectedMinimum={minSalary} // ios only
          selectedMaximum={maxSalary} // ios only
          tintColor={Colors.input_gray}
          handleColor={Colors.primary_color}
          handlePressedColor={Colors.primary_color}
          tintColorBetweenHandles={Colors.primary_color}
          onChange={(min, max) => {
            onChange(min, max);
          }}
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

const DEFAULT_FILTERS = {
  searchWord: {
    label: "",
    id: "",
  },
  searchWords: [],
  startDate: moment().format("YYYY-MM-DD"), // set the date of today
  // set the date of one year after the current date
  endDate: moment().add(1, "years").format("YYYY-MM-DD"),
  location: "",
  minSalary: 700,
  maxSalary: 1750,
};

const BottomSheetFilters = ({
  open,
  onClose = () => {},
  onApplyFilter = () => {},
  onTotalFilterAppliedChange = () => {},
}) => {
  const [snapToIndex, setSnapToIndex] = useState(-1);
  const [filterBy, setFilterBy] = useState(DEFAULT_FILTERS);
  const [onShowDatePicker, setOnShowDatePicker] = useState(false);

  const updateFilterBy = (value) => {
    setFilterBy({
      ...filterBy,
      ...value,
    });
  };

  // useEffect(() => {
  //   console.log("new filterBy", filterBy);
  // }, [filterBy]);

  useEffect(() => {
    if (open) {
      setSnapToIndex(0);
    } else {
      setSnapToIndex(-1);
    }
  }, [open]);

  const handleOpenDatePicker = useCallback(() => {
    setOnShowDatePicker(!onShowDatePicker);
  }, [onShowDatePicker]);

  const handleClose = useCallback(() => {
    setSnapToIndex(-1);
    onClose();
  }, [onClose]);

  const isReadyToSubmit = useMemo(() => {
    return (
      filterBy.searchWords.length > 0 ||
      filterBy.startDate !== DEFAULT_FILTERS.startDate ||
      filterBy.endDate !== DEFAULT_FILTERS.endDate ||
      filterBy.location !== DEFAULT_FILTERS.location ||
      filterBy.minSalary !== DEFAULT_FILTERS.minSalary ||
      filterBy.maxSalary !== DEFAULT_FILTERS.maxSalary
    );
  }, [filterBy]);

  const handleSubmit = useCallback(() => {
    onApplyFilter(filterBy);
    const { totalApplied, filterTrack } = Object.entries(
      DEFAULT_FILTERS
    ).reduce(
      (result, [key, defaultValue]) => {
        if (filterBy[key] !== defaultValue) {
          const updatedFilterTrack = { ...result.filterTrack };
          if (key === "minSalary" || key === "maxSalary") {
            updatedFilterTrack.salaryRange = `${filterBy.minSalary} - ${filterBy.maxSalary}`;
          } else if (key === "startDate" || key === "endDate") {
            updatedFilterTrack.dateRange = `${moment(filterBy.startDate).format(
              "DD MMM YYYY"
            )} - ${moment(filterBy.endDate).format("DD MMM YYYY")}`;
          } else {
            updatedFilterTrack[key] = filterBy[key];
          }
          return {
            totalApplied: result.totalApplied + 1,
            filterTrack: updatedFilterTrack,
          };
        }
        return result;
      },
      { totalApplied: 0, filterTrack: {} }
    );
    onTotalFilterAppliedChange(totalApplied);
    handleClose();
  }, [filterBy, onApplyFilter, onTotalFilterAppliedChange, handleClose]);

  const handleSearchWordChange = useCallback(
    (value) => {
      // console.log("value", value);
      updateFilterBy({
        searchWord: value,
      });
    },
    [filterBy]
  );

  const handleSearchWordAdd = useCallback(() => {
    if (filterBy.searchWord !== "") {
      updateFilterBy({
        searchWords: [
          ...filterBy.searchWords,
          {
            label: filterBy.searchWord,
            id: filterBy.searchWords.length + 1,
          },
        ],
        searchWord: {
          label: "",
          id: "",
        },
      });
    }
  }, [filterBy]);

  const handleSearchWordRemove = useCallback(
    (item) => {
      updateFilterBy({
        searchWords: filterBy.searchWords.filter(
          (searchWord) => searchWord.id !== item.id
        ),
      });
    },
    [filterBy]
  );

  const handleSearchWordsClear = useCallback(() => {
    updateFilterBy({
      searchWords: [],
      searchWord: {
        label: "",
        id: "",
      },
    });
  }, [filterBy]);

  const handleClear = useCallback(() => {
    setFilterBy(DEFAULT_FILTERS);
  }, []);

  const handleSalaryChange = useCallback((min, max) => {
    updateFilterBy({
      minSalary: min,
      maxSalary: max,
    });
  }, []);
  const handleLocationChange = useCallback((value) => {
    updateFilterBy({
      location: value,
    });
  }, []);

  const handleDateChange = useCallback((date) => {
    updateFilterBy({
      startDate: date.startDate,
      endDate: date.endDate,
    });
  }, []);

  const handleDateSelectChange = useCallback((date) => {
    updateFilterBy({
      startDate: date.startDate,
      endDate: date.endDate,
    });
  }, []);

  return (
    <BottomSheet
      open={open}
      onClose={handleClose}
      snapPoints={["85%"]}
      snapToIndex={snapToIndex}
      enableModalWrapper
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          // check if the the calendar is open or not
          if (onShowDatePicker) {
            setOnShowDatePicker(false);
          }
        }}
      >
        <View style={styles.container}>
          <Header
            title="Filtres"
            onClose={handleClose}
            onApply={handleSubmit}
          />

          <SearchKeywords
            values={filterBy}
            onChange={handleSearchWordChange}
            onAdd={handleSearchWordAdd}
            onRemove={handleSearchWordRemove}
            clearAll={handleSearchWordsClear}
          />

          {onShowDatePicker && (
            <View style={styles.showCalendar}>
              <CalendarPicker
                initialDates={{
                  startDate: filterBy.startDate,
                  endDate: filterBy.endDate,
                }}
                onUpdateCompleted={handleDateChange}
                onDateSelectChange={handleDateSelectChange}
              />
            </View>
          )}

          <DateTimePickers
            dates={{
              startDate: filterBy.startDate,
              endDate: filterBy.endDate,
            }}
            handleOpenDatePicker={handleOpenDatePicker}
          />

          <Location
            location={filterBy.location}
            onChange={handleLocationChange}
          />

          <Salary
            salaryRange={{
              minSalary: filterBy.minSalary,
              maxSalary: filterBy.maxSalary,
            }}
            onChange={handleSalaryChange}
          />
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
    backgroundColor: Colors.main_white,
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
    paddingBottom: 12,
  },
  searchKeywordsInput: {
    paddingHorizontal: 20,
    height: 52,
    borderRadius: 12,
    backgroundColor: Colors.input_gray,
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
    // marginTop: 20,
  },
  datePickerContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderTopColor: Colors.medium_grey,
    borderTopWidth: 2,
  },

  datePickerTitle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingRight: 18,
  },
  dateTimePickerLabel: {
    color: Colors.main_grey,
  },

  datesButton: {
    backgroundColor: Colors.input_gray,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: "65%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  datesButtonLabels: {
    color: Colors.dark_grey,
    fontSize: 14,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopColor: Colors.medium_grey,
    borderTopWidth: 2,
    paddingVertical: 16,
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
    borderTopWidth: 2,
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
  showCalendar: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: `${Colors.primary_color}33`,
    alignSelf: "center",
    padding: 5,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    bottom: 200,
  },
  clearButtonStyle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    alignSelf: "flex-end",
  },
  clearButtonLabel: {
    color: Colors.error_color,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clearButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  clearButtonLabel: {
    color: Colors.error_color,
  },
  applyButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  applyButtonLabel: {
    color: Colors.primary_color,
  },
});
