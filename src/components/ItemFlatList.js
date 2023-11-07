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
    height: 38,
    paddingHorizontal: 15,
  };

  const itemStyles = {
    ...commonStyles.itemStyle,
    backgroundColor: `${Colors.primary_color}33`,
    // width: 170,
    width: "95%",
    height: 170,
  };

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      {type === "simpleItems" ? (
        <View style={[simpleItemStyles, itemStyle]}>
          <Typography
            type="l_medium"
            typographyStyle={commonStyles.typographyStyle}
          >
            {item.label}
          </Typography>
        </View>
      ) : (
        <View style={[itemStyles, itemStyle]}>
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
  logoPicture: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 5,
  },
});
