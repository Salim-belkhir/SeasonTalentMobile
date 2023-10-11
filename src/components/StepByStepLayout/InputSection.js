import { StyleSheet, View, Image } from "react-native";
import Typography from "../Typography";
import { Colors } from "~/theme";
import Button from "../Button";
import TextInput from "../TextInput";

const InputSection = ({navigation}) => {
    return (
      <View>

        <View style={{ top: 183, flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <View style={styles.avancement}/>
            <View style={styles.rond}/>
            <View style={styles.rond}/>
        </View>

        <View>
            <Image
                source={require("~/assets/images/sub_step1.png")}
                alt="Schéma d'illustration"
                style={styles.schema}
            />
        </View>

        <View>
            <Typography type="l_bold" typographyStyle={styles.siret}>
                N° SIRET
            </Typography>
        </View>

        <View style={{ top: 190, flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
            <TextInput InputStyle={styles.numbers} keyboardType="numeric"/>
            <TextInput InputStyle={styles.numbers} keyboardType="numeric"/>

        </View>
      </View>
        
    );
};

export default InputSection;

const styles = StyleSheet.create({
    avancement: {
        width: 30,
        height: 8,
        borderRadius: 4,
        marginLeft: 5,
        backgroundColor: Colors.greenBlue,
    },
    rond: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 5,
        backgroundColor: Colors.grey,
    },
    schema: {
        top: 210,
        left: 41,
        width: 284,
        height: 284,
        resizeMode: "contain",
    },
    siret: {
        top: 180,
        color: Colors.greenBlue,
        fontSize: 15,
    },
    numbers: {
        width: 80,
        height: 34,
        marginLeft: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.dark_grey,
    },
});