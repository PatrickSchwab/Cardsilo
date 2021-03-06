import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { FontAwesome } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import {NotificationFeedbackType} from "expo-haptics";


export const Create = (props) =>{


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const navigateToCreateMenu = ({type,barCode}) => {
        props.navigation.navigate("CreateMenu", {type: type, barCode : barCode, addCard : props.addCard});
    };

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Haptics.notificationAsync(NotificationFeedbackType.Success);
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
        navigateToCreateMenu({type: type, barCode: data});
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            <View style={styles.scanContainer}/>
            <FontAwesome style={styles.barcodeIcon} name="barcode" size={50} color="#707070" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    scanContainer:{
        width: 300,
        height: 150,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor : '#707070',
        borderWidth : 1,
        borderRadius : 10,
    },
    barcodeIcon : {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        opacity: 0.5,
    }
});
