import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Image, Divider, Box, Center, HStack, Stack, NativeBaseProvider, FlatList} from "native-base";

const Card = (props) => {

    const [imageLoading, setImageLoading] = useState(true);

    return(
        <TouchableOpacity
            style={styles.cardComp}
        >
            <Image
                source = { imageLoading
                    ?
                    { uri: 'https://logo.clearbit.com/'+props.cardList[props.item.id].companyName.toLowerCase()+'.ch?size=500' }
                    :
                    { uri: 'https://logo.clearbit.com/'+props.cardList[props.item.id].companyName.toLowerCase()+'.com?size=500' }
                }
                onError={()=>setImageLoading(false)}
                alt={props.cardList[props.item.id].companyName}
                height={118}
                resizeMode="cover"
                borderRadius={9}
            />
        </TouchableOpacity>
    );
}

export const Home = (props) => {

    const cardList = props.cardList;

    return (
        <>
            <View style={styles.titleCardContainer}>
                <Text style={styles.titleCardText}>Cards</Text>
                <Divider/>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={cardList}
                    numColumns={2}
                    renderItem={({item}) => (<Card item={item} cardList={cardList}/>)}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardComp : {
        width : 150,
        height : 120,
        marginLeft : 15,
        marginTop: 30,
        borderColor : '#707070',
        borderWidth : 1,
        borderRadius : 10,
    },
    flatListContainer : {
        marginLeft: 15,
        height : 600,
    },
    titleCardContainer : {
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30,
    },
    titleCardText : {
        fontSize : 32,
        fontWeight: "bold",
    }
});