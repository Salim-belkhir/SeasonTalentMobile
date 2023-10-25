import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Typography from "./Typography";
import { Colors } from "~/theme";

const ItemFlatList = ({ type, item, itemStyle, onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} {...props}>
      {type === "simpleItems" ? (
        <View style={[styles.simpleItem, itemStyle]}>
          <Typography type="l_medium" typographyStyle={{ textAlign: "center" }}>
            {item.label}
          </Typography>
        </View>
      ) : (
        <View style={[styles.item, itemStyle]}>
          <Image source={{ url: item.logo }} style={styles.logoPicture} />
          <Typography type="xs_bold" typographyStyle={{ textAlign: "center" }}>
            {item.title}
          </Typography>
          <Typography type="xs_regular">{item.duration}</Typography>
          <Typography type="xs_medium">{item.location}</Typography>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ItemFlatList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: `${Colors.primary_color}33`,
    borderRadius: 24,
    width: 170,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 26,
  },
  simpleItem: {
    backgroundColor: Colors.pure_white,
    borderRadius: 8,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginRight: 8,
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
