import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, RefreshControl} from "react-native";
import {Divider, FlatList} from "native-base";
import {Card} from "./Card";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export const Home = (props) => {

    const [cardList, setCardList] = useState(props.cardList)
    const [refreshing, setRefreshing] = React.useState(false);

    const navigateToCardView = (id) => {
        props.navigation.navigate("CardView", { id: id , cardList : cardList, updateCard : props.updateCard, deleteCard : props.deleteCard, refreshHome : onRefresh});
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        console.log(cardList)
    },  [cardList])

    return (
        <>
            <View style={styles.titleCardContainer}>
                <Text style={styles.titleCardText}>Cards</Text>
                <Divider style={{marginTop : 5,}}/>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
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