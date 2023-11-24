import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { Colors } from "~/theme";
import Button from "./Button";
import Icon from "./Icon";
import Typography from "./Typography";

const mapStateToProps = (state) => ({
  userInfo: state.googleAuth.userInfo,
});

const MainHeader = ({ navigation, userInfo }) => {
  const title = "Bienvenue sur Season Talent !";
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Typography type="l_medium" typographyStyle={styles.titleAction}>
          {title}
        </Typography>
        <Typography type="l_bold" typographyStyle={styles.userName}>
          {userInfo.displayName + " 👋"}
        </Typography>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MainBottomTabNavigator", {
            screen: "Profil",
          })
        }
      >
        <Image
          source={{ url: userInfo.photoURL }}
          alt="Season Talent"
          style={styles.profilePicture}
        />
        <View style={styles.greenPoint} />
      </TouchableOpacity>
    </View>
  );
};

MainHeader.basicHeader = connect(mapStateToProps)(function ({
  userInfo,
  headerStyle,
}) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, headerStyle]}>
      <View style={styles.goBacktitleContainer}>
        <Button
          onPress={() => navigation.pop()}
          buttonStyle={styles.goBackButton}
        >
          <Icon name="left" size={28} color={Colors.main_black} />
        </Button>
        <Typography type="l_bold" typographyStyle={styles.userName}>
          {userInfo.displayName + " 👋"}
        </Typography>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("MainBottomTabNavigator", {
            screen: "Profil",
          })
        }
      >
        <Image
          source={{ url: userInfo.photoURL }}
          alt="Season Talent"
          style={styles.profilePicture}
        />
        <View style={styles.greenPoint} />
      </TouchableOpacity>
    </View>
  );
});

MainHeader.goBackOnly = function ({
  children,
  headerStyle,
  goBackButtonStyle,
  colorIcon,
}) {
  const navigation = useNavigation();
  return (
    <View style={headerStyle}>
      <Button
        onPress={() => navigation.pop()}
        buttonStyle={[styles.goBackButton, goBackButtonStyle]}
      >
        <Icon name="left" size={28} color={colorIcon || Colors.main_black} />
      </Button>
      {children}
    </View>
  );
};

MainHeader.exitOnly = function ({ children, headerStyle, colorIcon, onPress }) {
  const navigation = useNavigation();
  return (
    <View style={[headerStyle]}>
      <Button onPress={onPress} buttonStyle={styles.goBackButton}>
        <Icon name="close" size={28} color={colorIcon || Colors.main_black} />
      </Button>
      {children}
    </View>
  );
};

export default connect(mapStateToProps)(MainHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  goBacktitleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleAction: {
    color: Colors.dark_grey,
    marginBottom: 6,
  },
  userName: {
    fontSize: 18,
    lineHeight: 28,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "contain",
    borderColor: Colors.primary_color,
    borderWidth: 1,
  },
  greenPoint: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 16,
    height: 16,
    width: 8,
    height: 8,
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: Colors.primary_color,
    borderWidth: 4,
    borderColor: Colors.main_white,
  },
  goBackButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginRight: 22,
    width: 40,
  },
});
