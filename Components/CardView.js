import React, {useState} from 'react';
import {Keyboard, Share, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {Divider, Image, Input, Text, View} from "native-base";
import Barcode from 'react-native-barcode-svg';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export const CardView = (props) => {

    const id = props.route.params.id;
    const cardList = props.route.params.cardList;

    const [imageLoading, setImageLoading] = useState(true);

    const [companyName, setCompanyName] = useState(cardList[id].companyName);
    const [notes, setNotes] = useState(cardList[id].notes);

    const [editMode, setEditMode] = useState(false);

    const getSanitizeType = () => {
        const sanitizedType = cardList[id].type.split(".");
        return sanitizedType[sanitizedType.length - 1].toString().replace("-", "").toUpperCase();
    };

    const onSave = () => {
        //TODO on save
    };

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            title: cardList[id].companyName,
            headerRight: () => {
                if(!editMode){
                    return(
                        <TouchableOpacity
                            onPress={() => {setEditMode(true)}}
                            style={{marginRight: 10,}}
                        >
                            <MaterialIcons name="edit" size={23} color="#0E7AFE" />
                        </TouchableOpacity>
                    );
                }
                return(
                  <></>
                );
            }
            ,
        });
    }, [props.navigation, editMode]);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'This is my ' + cardList[id].companyName + '-card with the barcode: ' + cardList[id].barCode,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };


    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
                <View style={styles.pictureCardContainer}>
                    <Image
                        source = { imageLoading
                            ?
                            { uri: 'https://logo.clearbit.com/'+ cardList[id].companyName.toLowerCase()+'.ch?size=500' }
                            :
                            { uri: 'https://logo.clearbit.com/'+ cardList[id].companyName.toLowerCase()+'.com?size=500' }
                        }
                        onError={()=>setImageLoading(false)}
                        alt={cardList[id].companyName}
                        height={100}
                        resizeMode="cover"
                        borderRadius={100}
                    />
                </View>
                <View style={styles.pictureCreateCardContainer}>
                </View>
                <View>
                    <Input
                        isDisabled={(!editMode)}
                        variant="unstyled"
                        fontSize={22}
                        fontWeight={"bold"}
                        textAlign={"center"}
                        marginBottom={30}
                        value={companyName}
                        placeholder={"Company Name"}
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
                    isDisabled={(!editMode)}
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
                    <Text style={{marginRight : "auto", marginLeft : "auto", marginTop : "auto", marginBottom : "auto"}}>
                        <Barcode value={cardList[id].barCode} format={getSanitizeType()} maxWidth={200}/>
                    </Text>
                </View>
                {editMode ? (
                    <TouchableOpacity
                        style={styles.addCardButton}
                        onPress={onSave}
                    >
                        <Text style={{fontSize: 20, fontWeight: "bold", textAlign : "center", color : "#0E7AFE"}}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.addCardButton}
                        onPress={onShare}
                    >
                        <Text style={{fontSize: 20, fontWeight: "bold", textAlign : "center", color : "#0E7AFE"}}>
                            Share Card
                        </Text>
                    </TouchableOpacity>
                )
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    pictureCardContainer : {
        height: 100,
        width: 100,
        borderRadius: 100,
        borderColor : '#707070',
        borderWidth : 0,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
    },
    cardViewTitleText: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
    cardViewDivider: {
        width: 310,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 40,
    },
    barCodeContainer: {
        marginTop: 30,
        height: 180,
        width: 310,
        marginRight: "auto",
        marginLeft: "auto",
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 10,
        /* shadowing
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5

         */
    },
    notesContainer: {
        marginRight: "auto",
        marginLeft: "auto",
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 10,
        width: 310,
        height: 150,
    },
    addCardButton: {
        marginTop: 30,
        marginRight: "auto",
        marginLeft: "auto",
        height: 60,
        width: 310,
        justifyContent: "center",
        borderColor: "#0E7AFE",
        borderWidth: 1,
        borderRadius: 10,
    }
});