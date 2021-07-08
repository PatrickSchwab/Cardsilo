import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Divider, Image, Text, View} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';


export const CardView = (props) => {


    const id = props.route.params.id;
    const cardList = props.route.params.cardList;
    const [imageLoading, setImageLoading] = useState(true);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            title: cardList[id].companyName,
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => alert('This is a button!')}//TODO Edit mode
                    style={{marginRight: 10,}}
                >
                    <MaterialIcons name="edit" size={23} color="#0E7AFE" />
                </TouchableOpacity>
            ),
        });
    }, [props.navigation]);

    return(
        <>
            <View style={styles.pictureCardContainer}>
                <Image
                    source = { imageLoading
                        ?
                        { uri: 'https://logo.clearbit.com/'+cardList[id].companyName.toLowerCase()+'.ch?size=500' }
                        :
                        { uri: 'https://logo.clearbit.com/'+cardList[id].companyName.toLowerCase()+'.com?size=500' }
                    }
                    onError={()=>setImageLoading(false)}
                    alt={cardList[id].companyName}
                    height={100}
                    resizeMode="cover"
                    borderRadius={100}
                />
            </View>
            <Text style={styles.cardViewTitleText}>
                {cardList[id].companyName}
            </Text>
            <Divider style={styles.cardViewDivider}/>
            <View style={styles.barCodeContainer}>

            </View>
            <View style={styles.notesContainer}>
                <Text>
                    {cardList[id].notes}
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    pictureCardContainer : {
        width: 100,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
    },
    cardViewTitleText : {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 30,
    },
    cardViewDivider : {
        width: 310,
        marginLeft: "auto",
        marginRight: "auto",
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
        marginLeft: "auto",
        borderColor : '#707070',
        borderWidth : 1,
        borderRadius : 10,
        width: 310,
        marginTop: 40,
        height: 150,
    }
});