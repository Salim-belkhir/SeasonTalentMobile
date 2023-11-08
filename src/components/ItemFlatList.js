import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "~/theme";
import Typography from "./Typography";

const commonStyles = {
  itemStyle: {
    borderRadius: 8,
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
  backgroundColor: Colors.pure_white,
  marginRight: 8,
};

const itemStyles = {
  ...commonStyles.itemStyle,
  backgroundColor: `${Colors.primary_color}33`,
  width: "95%",
  height: 170,
};

const ItemFlatList = ({ type, item, itemStyle, onPress, ...props }) => {
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
      ) : type === "horizontalList" ? (
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
      ) : (
        <View style={styles.simpleDetailedItemContainer}>
          <Image source={{ url: item.logo }} style={styles.logoPictureSimple} />
          <View style={styles.titleAndSalaryContainer}>
            <Typography type="s_semibold" typographyStyle={styles.title}>
              {item.title}
            </Typography>
            <Typography type="s_regular">{item.salary} €/m</Typography>
            <Typography type="s_regular" typographyStyle={styles.otherInfo}>
              {item.location}
            </Typography>
            <Typography type="s_regular" typographyStyle={styles.otherInfo}>
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
          </View>
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
  logoPictureSimple: {
    width: 53,
    height: 43,
    resizeMode: "contain",
  },

  simpleDetailedItemContainer: {
    backgroundColor: Colors.pure_white,
    borderRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingVertical: 2,
    width: "100%",
    height: 74,
  },
  titleAndSalaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    width: "80%",
    flexWrap: "wrap",
  },
  title: {
    width: "70%",
    height: 25,
    overflow: "hidden",
  },
  otherInfo: {
    color: Colors.dark_grey,
  },
});
