import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import Typography from "../../Typography";
import { Colors } from "~/theme";
import Button from "../../Button";
import TextInput from "../../TextInput";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", adress: "", contact: "" };

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Requis"),
    adress: Yup.string().required("Requis"),
    contact: Yup.string().email("Email invalide").required("Requis"),
});

const InputSection = ({navigation}) => {

    const handleSecondStep = (values) => {
        console.log(values);
        navigation.navigate("ThirdStep");
    };

    const formikProps = {
        initialValues: initialValues,
        validationSchema,
        onSubmit: handleSecondStep,
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

            <Formik {...formikProps}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (


                <View style={styles.inputs}>
                    <TextInput
                        placeholder="Nom"
                        leftIcon="book"
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        value={values.name}
                        error={touched.name && errors.name}
                        returnKeyType="next"
                    />
                    <Text></Text>
                    <TextInput
                        placeholder="Adresse"
                        leftIcon="enviromento"
                        onChangeText={handleChange("adress")}
                        onBlur={handleBlur("adress")}
                        value={values.adress}
                        error={touched.adress && errors.adress}
                        returnKeyType="next"
                    />
                    <Text></Text>
                    <TextInput
                        placeholder="Contact"
                        leftIcon="mail"
                        onChangeText={handleChange("contact")}
                        onBlur={handleBlur("contact")}
                        value={values.contact}
                        error={touched.contact && errors.contact}
                    />
                    
                    <View style={styles.button}>
                        <Button
                            label="Continuez"
                            onPress={handleSubmit}
                            labelTypographyStyle={styles.buttonLabel}
                            hideIcon
                            disabled={
                            !(
                                values.name &&
                                values.adress &&
                                values.contact &&
                                !errors.name &&
                                !errors.adress &&
                                !errors.contact
                            )
                            }
                        />
                    </View>
                </View>

                )}
            </Formik>

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
    button: {
        paddingTop: 25,
    },
    buttonLabel: {
        color: Colors.main_white,
    },
});