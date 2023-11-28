import { StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "~/theme";

const SelectDropdownGen = ({
  data,
  type,
  onSelect = () => {},
  displaySelectedItem = () => {},
  displayItemForSelection = () => {},
  selectorButtonStyle,
  selectorbuttonTextStyle,
  dropdownStyle,
}) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem) => {
        onSelect(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem) => {
        return displaySelectedItem(selectedItem);
      }}
      rowTextForSelection={(item) => {
        return displayItemForSelection(item);
      }}
      defaultButtonText={"Sélectionner un " + type}
      renderDropdownIcon={(isOpened) => {
        return (
          <Icon
            name={isOpened ? "up" : "down"}
            color={Colors.main_white}
            size={24}
          />
        );
      }}
      dropdownIconPosition={"right"}
      renderSearchInputLeftIcon={() => {
        return (
          <Icon
            name="search1"
            size={20}
            color={Colors.main_grey}
            style={{
              marginLeft: 10,
            }}
          />
        );
      }}
      search
      searchPlaceHolder={"Rechercher un " + type}
      buttonStyle={[styles.selectButton, selectorButtonStyle]}
      buttonTextStyle={[styles.selectButtonText, selectorbuttonTextStyle]}
      dropdownStyle={styles.dropDown}
      rowStyle={styles.dropDownRow}
      rowTextStyle={styles.dropDownRowText}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SelectDropdownGen;

const styles = StyleSheet.create({
  selectButton: {
    height: 40,
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.main_grey,
    marginBottom: 10,
  },
  selectButtonText: {
    fontSize: 16,
    color: Colors.main_grey,
  },
  dropDown: {
    marginTop: 10,
    width: "100%",
    height: 300,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: Colors.primary_color,
  },
  dropDownRow: {
    backgroundColor: Colors.main_white,
    borderBottomWidth: 0,
    height: 40,
    justifyContent: "center",
  },
  dropDownRowText: {
    fontSize: 16,
    color: Colors.main_grey,
  },
});
