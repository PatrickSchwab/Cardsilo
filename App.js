import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {StyleSheet} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Home} from './Components/Home';
import {Settings} from './Components/Settings';
import {Create} from "./Components/Create";

const Tab = createBottomTabNavigator();

export default function App() {

    const [cardList, setCardList] = useState([
        {
            id: 0,
            companyName: "Tesla",
            notes: "blablabla",
        },
        {
            id: 1,
            companyName: "Google",
            notes: "blablabla",
        },
        {
            id: 2,
            companyName: "Pepsi",
            notes: "blablabla",
        },
        {
            id: 3,
            companyName: "Migros",
            notes: "blablabla",
        },
        {
            id: 4,
            companyName: "Coop",
            notes: "blablabla",
        },
        {
            id: 5,
            companyName: "brack",
            notes: "blablabla",
        },
        {
            id: 6,
            companyName: "Basefit",
            notes: "blablabla",
        }
    ])

    return (
        <>
            <NativeBaseProvider>
                <StatusBar/>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={({route}) => ({
                            tabBarIcon: ({ color}) => {
                                if (route.name === 'Home') {
                                    return <MaterialCommunityIcons name="home" size={24} color={color}/>;
                                } else if (route.name === 'Settings') {
                                    return <MaterialCommunityIcons name="account-settings" size={24} color={color}/>;
                                } else if (route.name === 'Create') {
                                    return <MaterialCommunityIcons name="camera-plus-outline" size={24} color={color}/>;
                                }
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: 'tomato',
                            inactiveTintColor: 'gray',
                        }}
                    >
                        <Tab.Screen
                            name="Home"
                            children={() => <Home cardList={cardList}/>}
                        />
                        <Tab.Screen
                            name="Create"
                            children={() => <Create cardList={cardList}/>}
                        />
                        <Tab.Screen
                            name="Settings"
                            children={() => <Settings cardList={cardList}/>}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </>
    );
}

const styles = StyleSheet.create({});
