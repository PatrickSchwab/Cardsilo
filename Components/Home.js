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
            <!-- TODO flatlist -->
        </>
    );
}

const styles = StyleSheet.create({
});