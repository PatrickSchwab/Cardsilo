import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, RefreshControl, TouchableOpacity} from "react-native";
import {Divider} from "native-base";

export const Starting = (props) => {

    return (
        <>
            <View style={styles.pictureFrame}>
            </View>
            <Text style={styles.titleTextStarting}>
                Welcome to Cardsilo!
            </Text>
            <Text style={styles.contentTextStarting}>
                Cardsilo is an App that helps you store your Cards
            </Text>
            <View style={styles.startingButtons}>
                <TouchableOpacity
                    style={styles.loginButtonStarting}
                    onPress={() => props.navigation.navigate("SignIn")}
                >
                    <Text style={{textAlign : "center", marginBottom : "auto", marginTop : "auto", fontSize: 20, fontWeight: "bold",color: "#0E7AFE"}}>Sign In</Text>
                </TouchableOpacity>
                <Divider orientation="vertical" style={{backgroundColor: "#0E7AFE"}} />
                <TouchableOpacity
                    style={styles.signInButtonStarting}
                    onPress={() => props.navigation.navigate("LogIn")}
                >
                    <Text style={{textAlign : "center", marginBottom : "auto", marginTop : "auto", fontSize: 20, fontWeight: "bold",color: "#0E7AFE"}}>Log In</Text>
                </TouchableOpacity>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    pictureFrame : {
        width : 310,
        height : 430,
        marginTop : 60,
        marginRight : "auto",
        marginLeft : "auto",
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 10,
    },
    titleTextStarting : {
        textAlign: "center",
        marginTop: 25,
        fontWeight: "bold",
        fontSize: 20,
    },
    contentTextStarting : {
        textAlign: "center",
        marginRight : "auto",
        marginLeft : "auto",
        marginTop: 10,
        fontSize: 18,
        width: 310,
    },
    startingButtons : {
        marginTop: 90,
        marginRight: "auto",
        marginLeft: "auto",
        height: 80,
        width: 310,
        justifyContent: "center",
        flexDirection: "row",
        borderColor: "#0E7AFE",
        borderWidth: 1,
        borderRadius: 10,
    },
    loginButtonStarting : {
        width: 155,
    },
    signInButtonStarting : {
        width: 155,

    }
});