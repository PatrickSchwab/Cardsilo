import React, {useEffect, useState} from 'react';
import {StyleSheet} from "react-native";
import {Divider, FlatList, Image, Text, View} from "native-base";


export const CardView = (props) => {


    const id = props.route.params.id;
    const cardList = props.route.params.cardList;
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(()=> {props.navigation.setOptions({title: cardList[id].companyName});},[]);

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
    titleCardContainer : {
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    pictureCardContainer : {
        width: 100,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
    },
    cardViewTitleText : {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
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