import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Typography from "./Typography";
import { Colors } from "~/theme";
import { connect } from "react-redux";

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

export default connect(mapStateToProps)(MainHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
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
    width: 54,
    height: 54,
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
});
