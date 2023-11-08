import { useCallback, useState } from "react";
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

const BottomSheetFilters = ({ onClose = () => {}, open, setOpen }) => {
  const [snapToIndex, setSnapToIndex] = useState(0);

  const handleClose = useCallback(() => {
    setSnapToIndex(-1);
    setOpen(false);
  }, [onClose]);

  const [values, setValues] = useState({
    searchWord: {
      label: "",
      id: "",
    },
    searchWords: [],
  });

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
          <View style={styles.header}>
            <Button
              hideIcon
              label="Fermer"
              buttonStyle={styles.closeButton}
              onPress={handleClose}
            >
              <Icon name="close" size={26} color={Colors.primary_color} />
            </Button>
            <Typography type="l_bold" typographyStyle={styles.title}>
              Filtres
            </Typography>

            <Button
              hideIcon
              label="Appliquer"
              buttonStyle={styles.closeButton}
              onPress={handleClose}
            >
              <Icon name="check" size={26} color={Colors.primary_color} />
            </Button>
          </View>

          <View style={styles.searchKeywordsContainer}>
            <TextInput
              placeholder="Ajouter un avantage ou une compétence"
              leftIcon="search1"
              inputStyle={styles.searchKeywordsInput}
              inputTypographyStyle={styles.searchKeywordsInputTypography}
              onChangeText={(value) => {
                setValues({ ...values, searchWord: value });
              }}
              value={values.searchWord}
              returnKeyType="next"
              onSubmitEditing={() => {
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
              }}
            />
            <FlatList
              items={values.searchWords}
              type={"simpleItems"}
              listStyle={[
                { marginTop: values.searchWords.length > 0 ? 15 : 0 },
              ]}
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
});
