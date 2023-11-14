import moment from "moment";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "~/theme";
import Icon from "./Icon";
import Typography from "./Typography";

const formatDate = (date) => moment(date).format("DD MMM");

const commonStyles = {
  itemStyle: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  typographyStyle: {
    textAlign: "center",
  },
};

const simpleItemStyles = {
  ...commonStyles.itemStyle,
  flexDirection: "row",
  height: 38,
  paddingHorizontal: 15,
  backgroundColor: Colors.pure_white,
  marginRight: 8,
};

const itemStyles = {
  ...commonStyles.itemStyle,
  backgroundColor: `${Colors.primary_color}33`,
  height: 170,
  marginLeft: 5,
  marginRight: 5,
};

const ItemFlatList = ({ type, item, itemStyle, onPress, ...props }) => {
  const { startDate, endDate, logo, title, location, salary } = item;
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.simpleDetailedItemContainer}>
        <Image source={{ url: logo }} style={styles.logoPictureSimple} />
        <View style={styles.titleAndSalaryContainer}>
          <Typography type="s_semibold" typographyStyle={styles.title}>
            {title}
          </Typography>
          <Typography type="s_regular">{salary} €/m</Typography>
          <Typography type="s_regular" typographyStyle={styles.otherInfo}>
            {location}
          </Typography>
          <Typography type="s_regular" typographyStyle={styles.otherInfo}>
            {start} - {end}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ItemFlatList.horizontalList = function ({
  item,
  itemsStyle,
  onPress,
  ...props
}) {
  const { logo, title, location, startDate, endDate } = item;
  const start = formatDate(startDate);
  const end = formatDate(endDate);

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      <View style={[itemStyles, itemsStyle]}>
        <Image source={{ url: logo }} style={styles.logoPicture} />
        <Typography
          type="xs_bold"
          typographyStyle={commonStyles.typographyStyle}
        >
          {title}
        </Typography>
        <Typography type="xs_regular">
          {start} - {end}
        </Typography>
        <Typography type="xs_medium">{location}</Typography>
      </View>
    </TouchableOpacity>
  );
};

ItemFlatList.simpleItems = function ({ item, itemsStyle, onPress, ...props }) {
  const { label } = item;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      <View style={[simpleItemStyles, itemsStyle]}>
        <Icon
          name="close"
          size={14}
          color={Colors.primary_color}
          style={{ marginRight: 5 }}
        />
        <Typography
          type="l_medium"
          typographyStyle={commonStyles.typographyStyle}
        >
          {label}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

ItemFlatList.companyItem = function ({ item, itemsStyle, onPress, ...props }) {
  const { logo, name, address } = item;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.simpleDetailedItemContainer}>
        <Image source={{ url: logo }} style={styles.logoPictureSimple} />
        <View style={styles.companyDetails}>
          <Typography type="s_semibold" typographyStyle={styles.title}>
            {name}
          </Typography>
          <Typography type="s_regular" typographyStyle={styles.companyAddress}>
            <Icon name="enviroment" size={14} color={Colors.primary_color} />{" "}
            {address}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemFlatList;

const styles = StyleSheet.create({
  logoPicture: {
    width: 63,
    height: 43,
    resizeMode: "contain",
    marginBottom: 8,
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
  companyItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: `${Colors.primary_color}33`,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  companyDetails: {
    marginLeft: 20,
  },
  companyName: {},
  companyAddress: {
    marginTop: 5,
    color: Colors.primary_color,
  },
});
