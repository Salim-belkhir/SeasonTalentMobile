import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Typography from "./Typography";
import { Colors } from "~/theme";

const ItemFlatList = ({ type, item, itemStyle, onPress, ...props }) => {
  const commonStyles = {
    itemStyle: {
      marginRight: type === "simpleItems" ? 8 : 26,
      borderRadius: type === "simpleItems" ? 8 : 24,
      justifyContent: "center",
      alignItems: "center",
    },
    typographyStyle: {
      textAlign: "center",
    },
  };

  const simpleItemStyles = {
    ...commonStyles.itemStyle,
    backgroundColor: Colors.pure_white,
    height: 38,
    paddingHorizontal: 15,
  };

  const itemStyles = {
    ...commonStyles.itemStyle,
    backgroundColor: `${Colors.primary_color}33`,
    width: 170,
    height: 170,
  };

  return (
    <TouchableOpacity onPress={() => onPress(item)} {...props}>
      {type === "simpleItems" ? (
        <View style={[styles.simpleItem, simpleItemStyles, itemStyle]}>
          <Typography
            type="l_medium"
            typographyStyle={commonStyles.typographyStyle}
          >
            {item.label}
          </Typography>
        </View>
      ) : (
        <View style={[styles.item, itemStyles, itemStyle]}>
          <Image source={{ url: item.logo }} style={styles.logoPicture} />
          <Typography
            type="xs_bold"
            typographyStyle={commonStyles.typographyStyle}
          >
            {item.title}
          </Typography>
          <Typography type="xs_regular">
            {new Date(item.startDate).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "short",
            }) +
              " - " +
              new Date(item.endDate).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "short",
              })}
          </Typography>
          <Typography type="xs_medium">{item.location}</Typography>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ItemFlatList;

const styles = StyleSheet.create({
  item: {},
  simpleItem: {},
  logoPicture: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 5,
  },
});
