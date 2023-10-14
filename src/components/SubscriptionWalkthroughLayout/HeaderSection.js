import { StyleSheet, View, Image } from "react-native";

const HeaderSection = ({navigation}) => {
    return (

        <View style={styles.ellipse}>
            <Image
                source={require("~/assets/images/logoSeasonTalent.png")}
                alt="Season Talent"
                style={styles.logoSeasonTalent}
            />
        </View>

    );
};

export default HeaderSection;

const styles = StyleSheet.create({
    ellipse: {
        width: 416,
        height: 416,
        backgroundColor: "rgba(14, 152, 140, 0.12)",
        borderRadius: 416,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginTop: -268,
        marginLeft: -30,
    },
    logoSeasonTalent: {
        width: 180,
        height: 71,
        marginTop: 290,
        marginLeft: 108,
    },
});
