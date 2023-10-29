import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '~/theme';
import Typography from './Typography';


const mockImage = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

const ActualSubscriptionCard = ({ subscription }) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: mockImage}} style={{width: 42, height: 42, marginRight: 10, resizeMode: "contain"}} />
            <View style={styles.subInfos}>
                <Typography type="l_medium" typographyStyle={{color: Colors.greenBlue}}>
                    {subscription.duree}
                </Typography>
                <Typography type="l_bold" typographyStyle={{color: subscription.typeSubscription.color}}>
                    {subscription.typeSubscription.name}
                </Typography>
            </View>
            <View style={styles.subInfos}>
                <Typography type="l_regular" typographyStyle={{color: Colors.red}}>
                    Fin le
                </Typography>
                <Typography type="l_regular" typographyStyle={{color: Colors.red}}>
                    {subscription.dateFin}
                </Typography>
            </View>
        </View>
    );
};

export default ActualSubscriptionCard;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 5,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        width: 220, // Ajustez la largeur et la hauteur en fonction de vos besoins
        height: 50,
        backgroundColor: Colors.pure_white, // Couleur de fond de la vue
        shadowColor: 'rgba(0, 0, 0, 0.2)', // Couleur de l'ombre
        shadowOffset: {
          width: 0, // Décalage horizontal de l'ombre
          height: 4, // Décalage vertical de l'ombre
        },
        shadowOpacity: 1, // Opacité de l'ombre
        shadowRadius: 10, // Rayon de l'ombre
    },
    subInfos: {
        flex: 1,
        flexDirection: "column",
    },
});