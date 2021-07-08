import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Divider, Image, Text, View} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export const Settings = () =>{

    return(
        <>
            <View style={styles.titleCardContainer}>
                <View style={styles.titleProfileContainer}>
                    <Text style={styles.titleCardText}>Settings</Text>
                    <TouchableOpacity style={{justifyContent: "flex-end", right: 0, position: "absolute", marginTop: 6,}}>
                        <MaterialIcons name="logout" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <Divider style={{marginTop : 5,}}/>
            </View>
            <View style={styles.pictureProfileContainer}>
                <Image
                    source = {
                        { uri: 'data:image/jpeg;base64,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',}
                    }
                    alt={"profile Picture"}
                    height={100}
                    resizeMode="cover"
                    borderRadius={100}
                />
            </View>
            <Text style={styles.titleProfileText}>Patrick Schwab</Text>
            <Text style={styles.usernameProfileText}>@paede</Text>
            <TouchableOpacity style={styles.buttonProfile}>
                <View style={styles.buttonProfileContainer}>
                    <Text style={styles.buttonProfileText}>Edit Profile</Text>
                    <MaterialIcons name="arrow-forward" size={18} color="black" />
                </View>
            </TouchableOpacity>
            <Divider style={{marginTop : 60,}}/>
        </>
    );
}

const styles = StyleSheet.create({
    titleCardContainer : {
        marginTop: 70,
        marginLeft: 30,
        marginRight: 30,
    },
    titleProfileContainer : {
        flexDirection: "row",
    },
    titleCardText : {
        fontSize : 32,
        fontWeight: "bold",
        color: "black",
    },
    pictureProfileContainer : {
        width: 100,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
    },
    titleProfileText : {
        marginTop: 5,
        fontSize : 20,
        fontWeight: "bold",
        textAlign : "center",
    },
    usernameProfileText : {
        fontSize : 15,
        fontWeight: "normal",
        textAlign : "center",
    },
    buttonProfile : {
        marginTop: 5,
        width: 115,
        height: 25,
        marginLeft: "auto",
        marginRight: "auto",
        borderColor : '#707070',
        borderWidth : 1,
        borderRadius : 10,
        justifyContent : "center",
        alignItems : "center",
    },
    buttonProfileText : {
        paddingRight: 6,
        fontSize : 14,
        fontWeight: "normal",
    },
    buttonProfileContainer : {
        paddingTop: 3,
        flexWrap : "wrap",
    }
});