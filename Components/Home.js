import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Divider, FlatList} from "native-base";
import {Card} from "./Card";

export const Home = (props) => {

    const cardList = props.route.params.cardList;

    const navigateToCardView = (id) => {
        props.navigation.navigate("CardView", { id: id });
    };

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
                    renderItem={({item}) => (<Card item={item} cardList={cardList} navigateToCardView={navigateToCardView}/>)}
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