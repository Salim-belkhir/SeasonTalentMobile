import React from "react";
import { useState } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { DefaultLayout, FlatList, MainHeader, Typography } from "~/components";
import ActualSubscriptionCard from "~/components/ActualSubscriptionCard";
import { ABONNEMENT } from "~/constants/Abonnement";
import { TYPE_ITEM_FLAT_LIST } from "~/constants/TypeItemFlatList";
import { Colors } from "~/theme";

const texts = {
    actualSubscription: "Formule actuelle",
    subscription: "Souscription à une nouvelle formule",
    duree: "Durée en mois",
};

const actualSubscription = {
    typeSubscription: ABONNEMENT.PLATINUM,
    duree: "6 mois",
    dateFin: "12/12/2021",
};

const durees = [3,6,9,12];

const SubscriptionDetailsScreen = ({navigation}) => {

    const [newSubSelected, setNewSubSelected] = useState(null);
    const [newDurationSelected, setNewDurationSelected] = useState(null);

    return (
        <DefaultLayout navigation={navigation}>
            <ScrollView style={styles.container}>
                <MainHeader.arrowBackAndButtonRight 
                    navigation={navigation} labelButton={"Enregistrer"} 
                    styleButton={styles.styleButton} actionButton={() => console.log("cliqué")} 
                />

                <Typography type="l_bold" typographyStyle={styles.spaceBetween} >
                    {texts.actualSubscription}
                </Typography>

                <View style={styles.spaceBetween}>
                    <ActualSubscriptionCard subscription={actualSubscription} />
                </View>

                <Typography type="l_bold" typographyStyle={styles.spaceBetween}>
                    {texts.subscription}
                </Typography>

                <FlatList 
                    navigation={navigation} items={Object.values(ABONNEMENT)} 
                    itemType={TYPE_ITEM_FLAT_LIST.SUBSCRIPTION_CARD} listStyle={styles.spaceBetween}
                    onPressedItem={function(item) {
                        setNewSubSelected(item);
                    }}
                    newSubSelected={newSubSelected}
                />

                <Typography type="l_bold" typographyStyle={styles.spaceBetween}>
                    {texts.duree}
                </Typography>

                <View style={styles.numberOfMonths}>
                    {durees.map((duree, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => setNewDurationSelected(duree)}>
                                <View key={index} style={{...styles.numberOfMonthsText, backgroundColor: newDurationSelected == duree ? Colors.grey : Colors.pure_white}}>
                                    <Typography type="l_bold" typographyStyle={{color: Colors.pure_black}}>
                                        {duree}
                                    </Typography>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>


            </ScrollView>
        </DefaultLayout>
    )
};


export default SubscriptionDetailsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 23,
        paddingRight: 23,
    },
    styleButton: {
        color: Colors.main_white,
        fontSize: 16,
        color: Colors.green,
        marginTop: 10,       
    },
    spaceBetween: {
        marginBottom: 30,
    },
    numberOfMonths: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    numberOfMonthsText: {
        fontSize: 16,
        color: Colors.pure_black,
        backgroundColor: Colors.pure_white,
        padding: 15,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 10,
    },
});