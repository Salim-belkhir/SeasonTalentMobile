import moment from "moment";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "~/theme";
import Button from "./Button";
import Icon from "./Icon";
import Typography from "./Typography";

const formatDate = (date) => moment(date).format("DD MMM YY");

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
  overflow: "hidden",
};

const ItemFlatList = ({ type, item, itemStyle, onPress, ...props }) => {
  const { startDate, endDate, company, title, salary } = item;
  const { logo, location } = company;
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
  itemStyle,
  onPress,
  ...props
}) {
  const { title, startDate, endDate, company } = item;

  const { logo, location } = company;

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
      <View style={[itemStyles, itemStyle]}>
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

ItemFlatList.simpleItems = function ({ item, itemStyle, onPress, ...props }) {
  const { label } = item;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      <View style={[simpleItemStyles, itemStyle]}>
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

ItemFlatList.companyItem = function ({ item, itemStyle, onPress, ...props }) {
  const { logo, name, address } = item;

  // get the function swapItem from the props
  const { swapItem } = props;

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
          <View style={styles.titleAndPositionContainer}>
            <Typography type="s_semibold" typographyStyle={styles.title}>
              {name}
            </Typography>
            <Typography
              type="s_regular"
              typographyStyle={styles.companyAddress}
            >
              <Icon name="enviroment" size={14} color={Colors.primary_color} />{" "}
              {address}
            </Typography>
          </View>
          {/* button to swap the item */}
          <Button
            hideIcon
            onPress={() => swapItem(item)}
            buttonStyle={styles.swapButton}
          >
            <Icon name="swap" size={20} color={Colors.primary_color} />
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ItemFlatList.files = function ({ item, itemStyle, onPress, ...props }) {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      <View style={[simpleItemStyles, itemStyle]}>
        <Image source={item.logo} style={styles.fileLogo} />
        <Typography type="l_regular" typographyStyle={styles.fileTitle}>
          {item.name}
        </Typography>
        <TouchableOpacity onPress={() => onPress(item)}>
          <Icon name="close" size={18} color={Colors.main_black} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

ItemFlatList.candidates = function ({ item, itemStyle, onPress, ...props }) {
  const { name, location, availability, experiences, image, isFavorite } = item;
  const lastExperience = () => {
    if (experiences.length > 0) {
      return experiences[0].joOffer.company.name;
    }
    return "Aucune expérience";
  };

  const start = availability.startDate
    ? formatDate(availability.startDate)
    : "Non Disponible";
  const end = availability.endDate ? formatDate(availability.endDate) : "";

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.candidateItemContainer}>
        <Image
          source={require("~/assets/images/background.png")}
          style={styles.backgroundImage}
        />

        <View style={styles.candidateHeader}>
          <Image source={{ uri: image }} style={styles.candidatePicture} />
          <Typography type="l_medium" typographyStyle={styles.candidateName}>
            {name}
          </Typography>
          <Button
            hideIcon
            onPress={() =>
              props.onPressFavorite({
                id: item.id,
                isFavorite: isFavorite,
              })
            }
            buttonStyle={styles.favoriteButton}
          >
            <Icon
              name={isFavorite ? "heart" : "hearto"}
              size={20}
              color={isFavorite ? Colors.error_color : Colors.main_white}
            />
          </Button>
        </View>

        <View style={styles.candidateDetails}>
          <Typography type="l_regular" typographyStyle={styles.candidateInfo}>
            <Icon name="enviroment" size={18} color={Colors.main_white} />{" "}
            {location}
          </Typography>
          <Typography type="l_regular" typographyStyle={styles.candidateInfo}>
            <Icon name="calendar" size={18} color={Colors.main_white} /> {start}{" "}
            {end}
          </Typography>
          <Typography type="l_regular" typographyStyle={styles.candidateInfo}>
            <Icon name="wallet" size={18} color={Colors.main_white} />{" "}
            {lastExperience()}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ItemFlatList.matchedCandidates = function ({
  item,
  itemStyle,
  onPress,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      {...props}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.matchedContainer}>
        <ItemFlatList.candidates
          item={{
            ...item.candidate,
            id: item.idCandidate,
          }}
          onPress={() => onPress(item)}
          {...props}
        />
        <Icon name="aliyun" size={24} color={Colors.primary_color} />
        <ItemFlatList.horizontalList
          item={item.jobOffer}
          onPress={() => onPress(item)}
          {...props}
        />
      </View>
    </TouchableOpacity>
  );
};

ItemFlatList.reviews = function ({ item, itemStyle, onPress, ...props }) {
  const { title } = item.joOffer;
  const { name, logo, location } = item.joOffer.company;
  const { date, description, reviewer } = item.review;

  const reviewDate = formatDate(date);

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
          <Typography type="s_regular">
            <Icon name="calendar" size={14} color={Colors.dark_grey} />{" "}
            {reviewDate}
          </Typography>
          <Typography type="s_regular" typographyStyle={styles.reviewInfo}>
            <Icon name="enviroment" size={14} color={Colors.primary_color} />{" "}
            {location}
          </Typography>
          <Typography type="s_regular" typographyStyle={styles.reviewInfo}>
            {name}
          </Typography>
          <Typography type="s_regular" typographyStyle={styles.reviewInfo}>
            Par {reviewer}
          </Typography>
          <Typography type="s_regular" typographyStyle={styles.reviewText}>
            {description}
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
  simpleDetailedItemContainer: {
    backgroundColor: Colors.pure_white,
    borderRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
  },
  companyDetails: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  titleAndPositionContainer: {
    width: "80%",
  },
  companyName: {},
  companyAddress: {
    color: Colors.primary_color,
  },
  swapButton: {
    backgroundColor: Colors.main_white,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
  },
  fileTitle: {
    color: Colors.dark_grey,
    width: "65%",
    overflow: "hidden",
  },
  fileLogo: {
    width: 30,
    height: 40,
    borderRadius: 9,
    resizeMode: "cover",
    marginRight: 5,
  },
  candidateItemContainer: {
    borderRadius: 12,
    overflow: "hidden",
    height: 170,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: 220,
    position: "absolute",
    zIndex: -1,
  },
  candidateHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 5,
    justifyContent: "space-between",
  },
  candidatePicture: {
    width: 40,
    height: 40,
    borderRadius: 12,
    resizeMode: "cover",
  },
  candidateName: {
    color: Colors.main_white,
    overflow: "hidden",
    fontSize: 12,
    width: "60%",
    marginLeft: 5,
    textAlign: "center",
  },
  favoriteButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  candidateDetails: {},
  candidateInfo: {
    color: Colors.main_white,
    marginTop: 8,
    fontSize: 12,
  },
  matchedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewInfo: {
    color: Colors.primary_color,
  },
  reviewText: {
    color: Colors.dark_grey,
    marginTop: 10,
  },
});
