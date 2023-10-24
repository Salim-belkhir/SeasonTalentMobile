import { StyleSheet, View, Image } from "react-native";
import Typography from "./Typography";




const SubscriptionInfoCard = ({ subscription }) => {

    subscription.name = subscription.name.charAt(0).toUpperCase() + subscription.name.slice(1).toLowerCase();
    
    return (
        <View style={styles.card}>
            <Image source={subscription.logo} style={styles.logoImage} />
            <View style={styles.sectionText}>
                <Typography type="xs_bold" typographyStyle={{color: subscription.color}}>
                    {subscription.name}
                </Typography>
                <Typography type="xs_regular">
                    {subscription.description}
                </Typography>
            </View>
        </View>
    );
};


export default SubscriptionInfoCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        borderRadius: 10,
    },
    sectionText:{
        flexDirection: "column",
    },
    logoImage: {
        width: 42,
        height: 42,
        resizeMode: "contain",
        marginLeft: 5,
        marginTop: 5,
    },

});