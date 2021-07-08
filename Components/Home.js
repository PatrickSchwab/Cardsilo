import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Divider, FlatList} from "native-base";
import {Card} from "./Card";

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