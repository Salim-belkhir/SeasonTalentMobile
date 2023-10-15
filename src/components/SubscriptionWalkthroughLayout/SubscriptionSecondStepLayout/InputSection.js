import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import Typography from "../../Typography";
import { Colors } from "~/theme";
import Button from "../../Button";
import TextInput from "../../TextInput";

const InputSection = ({navigation}) => {

    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [contact, setContact] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleNameChange = (text) => {
        setName(text);
        updateButtonState(name, adress, contact);
    };

    const handleNumAdressChange = (text) => {
        setAdress(text);
        updateButtonState(name, adress, contact);
    };

    const handleContactChange = (text) => {
        setContact(text);
        updateButtonState(name, adress, contact);
      };

    const updateButtonState = (name, adress, contact) => {
        if (name.length > 0 && adress.length > 0 && contact.length > 0) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };

    return (
        <View style={styles.page}>
  
            <View style={styles.progression}>
                <View style={styles.circle}/>
                <View style={styles.actual_step}/>
                <View style={styles.circle}/>
            </View>
  
            <View style={styles.schema_view}>
                <Image
                    source={require("~/assets/images/sub_step2.png")}
                    alt="Schéma d'illustration"
                    style={styles.schema}
                />
            </View>

            <Typography type="l_bold" typographyStyle={styles.title}>
                Ajoutez un établissemement
            </Typography>

            <View style={styles.inputs}>
                <TextInput placeholder="Nom" leftIcon="book" value={name} onChangeText={handleNameChange}/>
                <Text></Text>
                <TextInput placeholder="Adresse" leftIcon="enviromento" value={adress} onChangeText={handleNumAdressChange}/>
                <Text></Text>
                <TextInput placeholder="Contact" leftIcon="mail" value={contact} onChangeText={handleContactChange}/>
            </View>

            <View>
                <Button
                    label="Continuez"
                    disabled={isButtonDisabled}
                    onPress={() => navigation.navigate("ThirdStep")}
                    hideIcon
                />
            </View>

        </View>

    )
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
    title: {
        textAlign: "center",
        fontSize: 20,
        paddingBottom: 20,

    },
    inputs: {
        paddingBottom: 30,
    },
});