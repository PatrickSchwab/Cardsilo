import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import {Divider, Image, Input} from "native-base";

export const CreateMenu = (props) => {

    const id = props.route.params.id;
    const type = props.route.params.type;
    const barCode = props.route.params.barCode;
    const cardList = props.route.params.cardList;

    const [companyName, setCompanyName] = useState("Company's name");
    const [notes, setNotes] = useState("Notes...");

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
                <View style={styles.pictureCreateCardContainer}>
                </View>
                <View>
                    <Input
                        variant="unstyled"
                        fontSize={22}
                        fontWeight={"bold"}
                        textAlign={"center"}
                        marginBottom={30}
                        value={companyName}
                        onChangeText={(e) => setCompanyName(e)}
                        style={styles.cardViewTitleText}
                        _light={{
                            placeholderTextColor: "blueGray.400",
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>
                <Divider style={styles.cardViewDivider}/>
                <Input
                    multiline={true}
                    maxHeight={70}
                    width={310}
                    color="#707070"
                    height={150}
                    marginRight={"auto"}
                    marginLeft={"auto"}
                    maxLength={40}
                    value={notes}
                    onChangeText={(e) => setNotes(e)}
                    style={styles.notesContainer}
                    _light={{
                        placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                        placeholderTextColor: "blueGray.50",
                    }}
                />
                <View style={styles.barCodeContainer}>
                </View>
                <TouchableOpacity
                    style={styles.addCardButton}
                >
                    <Text style={{fontSize: 20, fontWeight: "bold", textAlign : "center", color : "#0E7AFE"}}>
                        Add Card
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    pictureCreateCardContainer : {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderColor : '#707070',
        borderWidth : 1,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        marginBottom: 10,
    },
    cardViewTitleText : {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
    cardViewDivider : {
        width: 310,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 40,
    },
    barCodeContainer : {
        marginTop: 30,
        height: 180,
        width: 310,
        marginRight : "auto",
        marginLeft: "auto",
        borderColor : '#707070',
        borderWidth : 1,
        borderRadius : 10,
        /* shadowing
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5

         */
    },
    notesContainer : {
        marginRight : "auto",
        marginLeft  : "auto",
        borderColor : '#707070',
        borderWidth : 1,
        borderRadius : 10,
        width: 310,
        height: 150,
    },
    addCardButton : {
        marginTop: 30,
        marginRight : "auto",
        marginLeft  : "auto",
        height : 60,
        width : 310,
        justifyContent: "center",
        borderColor : "#0E7AFE",
        borderWidth : 1,
        borderRadius : 10,
    }
});