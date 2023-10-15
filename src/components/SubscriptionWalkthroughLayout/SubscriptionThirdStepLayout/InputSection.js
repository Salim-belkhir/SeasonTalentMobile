import React, { useState } from 'react';
import { Text, StyleSheet, View } from "react-native";
import Typography from "../../Typography";
import { Colors } from "~/theme";
import Button from "../../Button";
import TextInput from "../../TextInput";

const InputSection = ({navigation}) => {

    return (
        <View style={styles.page}>
            <View style={styles.progression}>
                <View style={styles.circle}/>
                <View style={styles.circle}/>
                <View style={styles.actual_step}/>
            </View>

            <Typography type="l_bold" typographyStyle={styles.title}>
                Téléchargez des documents
            </Typography>

            <View style={styles.div}>
                <Text style={styles.text}>Téléchargez les documents {"\n"} nécessaires (contrat , ... , ...)</Text>

                <View style={styles.download}>
                    <Text style={styles.downloadText}>Téléverser un Doc/Docx/PDF</Text>
                </View>

                <View style={styles.button}>
                    <Button
                        label="Téléchargez"
                        hideIcon
                    />
                </View>
            </View>

            <View style={styles.submitButton}>

                <Button
                    label="Continuez"
                    disabled
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
    title: {
        fontSize: 16,
        marginTop: 25,
    },
    div: {
        width: 327,
        height: 315,
        borderWidth: 1,
        borderColor: Colors.greenBlue,
        borderStyle: "dashed",
        borderRadius: 24,
        marginTop: 24,
        marginLeft: 7,
    },
    text: {
        fontSize: 13,
        color: Colors.dark_grey,
        marginTop: 40,
        marginLeft: 58,
    },
    download: {
        width: 263,
        height: 73,
        borderRadius: 12,
        marginTop: 32,
        marginLeft: 32,
        backgroundColor: Colors.medium_grey,
        justifyContent: "center",
        alignItems: "center",
    },
    downloadText: {
        fontSize: 14,
        color: Colors.greenBlue,
    },
    button: {
        width: 184,
        marginTop: 32,
        marginLeft: 64,
    },
    submitButton: {
        width: 327,
        height: 56,
        marginTop: 133,
    },

});