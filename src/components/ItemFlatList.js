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

ItemFlatList.Subscription = ({subscription, newSubSelected, onPress}) => {
  subscription.name = subscription.name.charAt(0).toUpperCase() + subscription.name.slice(1).toLowerCase();

  const backgroundColor = subscription.name === newSubSelected?.name ? `${subscription.color}33` : Colors.pure_white;

  return (
    <TouchableOpacity onPress={(event) => onPress(subscription)}>
      <View style={{...styles.cardSub, backgroundColor}}>
        <Image source={ subscription.logo} style={styles.logoSub} />
        <View style={styles.sectionTextSub}>
            <Typography type="l_bold" typographyStyle={{fontSize: 17, color: subscription.color}}>
              {subscription.name}
            </Typography>
            <Typography type="s_regular">
                {subscription.description}
            </Typography>
        </View>
    </View>
    </TouchableOpacity>
  )
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
    marginRight: 10,
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
  cardSub: {
    width: "95%",
    backgroundColor: Colors.pure_white,
    height: 100,
    display: "grid",
    flexDirection: "row",
    borderRadius: 8,
    marginRight: "auto",
    marginLeft: "auto",
  },
  sectionTextSub:{
    width: "80%",
    marginTop: 25,
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
  },
  logoSub: {
      width: 42,
      height: 42,
      resizeMode: "contain",
      marginLeft: 5,
      marginTop: 5,
  },
});
