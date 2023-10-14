import React, { useState } from 'react';
import { StyleSheet, View, Image } from "react-native";
import Typography from "../../Typography";
import { Colors } from "~/theme";
import Button from "../../Button";
import TextInput from "../../TextInput";

const InputSection = ({navigation}) => {
    const [siret, setSiret] = useState('');
    const [numTel, setNumTel] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleSiretChange = (text) => {
        setSiret(text);
        updateButtonState(text, numTel);
    };

    const handleNumTelChange = (text) => {
        setNumTel(text);
        updateButtonState(siret, text);
    };

    const updateButtonState = (siret, numTel) => {
        if (siret.length > 0 && numTel.length > 0) {
        setIsButtonDisabled(false);
        } else {
        setIsButtonDisabled(true);
        }
    };

    return (
      <View style={styles.page}>

        <View style={styles.progression}>
            <View style={styles.actual_step}/>
            <View style={styles.circle}/>
            <View style={styles.circle}/>
        </View>

        <View style={styles.schema_view}>
            <Image
                source={require("~/assets/images/sub_step1.png")}
                alt="Schéma d'illustration"
                style={styles.schema}
            />
        </View>

        <View>
            <Typography type="l_bold" typographyStyle={styles.siret_title}>
                N° SIRET
            </Typography>
            <TextInput leftIcon="idcard" keyboardType="numeric" maxLength={14} value={siret} onChangeText={handleSiretChange}/>
        </View>
        
        <View>
            <Typography type="l_bold" typographyStyle={styles.num_tel}>
                Num Tel
            </Typography>
            <TextInput leftIcon="phone" keyboardType="numeric" value={numTel} onChangeText={handleNumTelChange}/>
        </View>

        <View style={styles.button}>
            <Button
                label="Continuez"
                disabled={isButtonDisabled}
                onPress={() => navigation.navigate("SecondStep")}
                hideIcon/>
        </View>
      </View>
        
    );
};

export default InputSection;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 25,
    },
    progression: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    actual_step: {
        width: 30,
        height: 8,
        borderRadius: 4,
        marginLeft: 5,
        backgroundColor: Colors.greenBlue,
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 5,
        backgroundColor: Colors.grey,
    },
    schema_view: { 
        justifyContent: "center",
        alignItems: "center",
    },
    schema: {
        width: 284,
        height: 284,
        resizeMode: "contain",
    },
    siret_title: {
        color: Colors.greenBlue,
        fontSize: 15,
        paddingBottom: 10,
    },
    num_tel: {
        color: Colors.greenBlue,
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    button: {
        paddingTop: 20,
    },
});