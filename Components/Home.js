import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Divider, FlatList} from "native-base";
import {Card} from "./Card";

export const Home = (props) => {

    const [cardList, setCardList] = useState(props.cardList)

    const navigateToCardView = (id) => {
        props.navigation.navigate("CardView", { id: id , cardList : cardList});
    };

    useEffect(() => {
        console.log("Home Output:")
        console.log(cardList[cardList.length - 2]);
        console.log(cardList[cardList.length - 1]);
        console.log("------------------------")
    },[cardList])

    return (
        <>
            <View style={styles.titleCardContainer}>
                <Text style={styles.titleCardText}>Cards</Text>
                <Divider style={{marginTop : 5,}}/>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={cardList}
                    numColumns={2}
                    renderItem={({item}) => (<Card item={item} navigateToCardView={navigateToCardView}/>)}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    flatListContainer : {
        marginLeft: 15,
        height : 620,
    },
    titleCardContainer : {
        marginTop: 70,
        marginLeft: 30,
        marginRight: 30,
    },
    titleCardText : {
        fontSize : 32,
        fontWeight: "bold",
    }
});