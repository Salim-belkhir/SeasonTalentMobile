import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Typography from "./Typography";
import { Colors } from "~/theme";

const ItemFlatList = ({ type, item, onPress, itemStyle, ...otherProps }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.item, itemStyle]}>
        <Image source={{ url: item.logo }} style={styles.logoPicture} />
        <Typography type="xs_bold" typographyStyle={{ textAlign: "center" }}>
          {item.title}
        </Typography>
        <Typography type="xs_regular">{item.duration}</Typography>
        <Typography type="xs_medium">{item.location}</Typography>
      </View>
    </TouchableOpacity>
  );
};

export default ItemFlatList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: `${Colors.primary_color}33`,
    borderRadius: 24,
    width: 156,
    height: 164,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 34,
  },
  title: {
    fontSize: 32,
  },
  logoPicture: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 5,
  },
});
