import React from "react";
import { FlatList as Fl, StyleSheet, View } from "react-native";
import ItemFlatList from "./ItemFlatList";
import { TYPE_ITEM_FLAT_LIST } from "~/constants/TypeItemFlatList";

const FlatList = ({
  navigation,
  type,
  items,
  itemsStyle,
  listStyle,
  onPressedItem,
  itemType,
  ...otherProps
}) => {

  let renderItem = null;

  switch(itemType){
    case TYPE_ITEM_FLAT_LIST.SUBSCRIPTION_CARD:
      renderItem = ({ item }) => <ItemFlatList.Subscription subscription={item} {...otherProps} onPress={onPressedItem} />;
      break;
    default:
      renderItem = ({ item }) => <ItemFlatList item={item} type={type} onPress={onPressedItem} />;
  }
  
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <Fl
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={type === "horizontalList" ? 2 : 1}
      ItemSeparatorComponent={renderSeparator}
      contentContainerStyle={[styles.list, listStyle]}
      showsVerticalScrollIndicator={false}
      {...otherProps}
      on
    />
  );
};

export default FlatList;

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  list: {},
});
