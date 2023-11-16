import { FlatList as Fl, StyleSheet, View } from "react-native";
import ItemFlatList from "./ItemFlatList";

const FlatList = ({
  navigation,
  type,
  items,
  itemsStyle,
  listStyle,
  onPressedItem,
  ...otherProps
}) => {
  const renderItem = ({ item }) => {
    const itemTypesToRender = {
      companyItems: (
        <ItemFlatList.companyItem
          item={item}
          itemStyle={itemsStyle}
          onPress={onPressedItem}
          {...otherProps}
        />
      ),
      simpleItems: (
        <ItemFlatList.simpleItems
          item={item}
          itemStyle={itemsStyle}
          onPress={onPressedItem}
        />
      ),
      horizontalList: (
        <ItemFlatList.horizontalList
          item={item}
          itemStyle={itemsStyle}
          onPress={onPressedItem}
        />
      ),
      default: (
        <ItemFlatList
          item={item}
          itemStyle={itemsStyle}
          onPress={onPressedItem}
        />
      ),
    };

    return itemTypesToRender[type];
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const keyExtractor = (item) => item.id.toString();

  const numColumns = type === "horizontalList" ? 2 : 1;

  return (
    <Fl
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={[styles.list, listStyle]}
      showsVerticalScrollIndicator={false}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  list: {
    flexGrow: 1,
  },
});

export default FlatList;
