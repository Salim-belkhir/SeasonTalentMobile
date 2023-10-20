import React from "react";
import { FlatList as Fl, StyleSheet, View } from "react-native";
import ItemFlatList from "./ItemFlatList";

const FlatList = ({
  navigation,
  type,
  items,
  itemsStyle,
  listStyle,
  ...otherProps
}) => {
  const renderItem = ({ item }) => <ItemFlatList item={item} />;
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
