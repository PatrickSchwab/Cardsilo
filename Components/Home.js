import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Image, Box, Center, HStack, Stack, NativeBaseProvider, FlatList} from "native-base";

const Card = () => {
    return(
        <View>
            <Image
                source={{
                    uri: 'https://logo.clearbit.com/tesla.com',
                }}
                alt="Alternate Text"
                size={"md"}
            />
        </View>
    );
}

export const Home = (props) => {

    return(
        <>
            <FlatList
                numColumns = {2}
                data={props.cardList}
                keyExtractor={(o, i) => i.toString()}
                renderItem={this.renderProductListItem}
                ListFooterComponent={() => {
                    if ((this.state.products.length < this.state.totalFound || this.state.loading) && !this.state.refreshing)
                        return <Spinner style={style.loading} />
                    return <View style={style.loading} />
                }}

                ItemSeparatorComponent={() => <View style={style.separator} />} />
        </>
    );
}

const styles = StyleSheet.create({
});