import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {StyleSheet} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Home} from './Components/Home';
import {Settings} from './Components/Settings';
import {Create} from "./Components/Create";
import {CardView} from "./Components/CardView";
import {CreateMenu} from "./Components/CreateMenu";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

    const [cardList, setCardList] = useState([
        {
            id: 0,
            companyName: "Tesla",
            notes: "blablabla",
            type: "",
            barCode: "",
        },
        {
            id: 1,
            companyName: "Google",
            notes: "blablabla",
            type: "",
            barCode: "",
        },
        {
            id: 2,
            companyName: "Pepsi",
            notes: "blablabla",
            type: "",
            barCode: "",
        },
        {
            id: 3,
            companyName: "Migros",
            notes: "blablabla",
            type: "",
            barCode: "",
        },
        {
            id: 4,
            companyName: "Coop",
            notes: "blablabla",
            type: "",
            barCode: "",
        },
        {
            id: 5,
            companyName: "brack",
            notes: "blablabla",
            type: "",
            barCode: "",
        },
        {
            id: 6,
            companyName: "Basefit",
            notes: "blablabla",
            type: "",
            barCode: "",
        }
    ]);

    const StackNavigatorHome = () => {
        return(
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    initialParams={{cardList : cardList}}
                    options={{headerShown : false}}
                />
                <Stack.Screen
                    name="CardView"
                    component={CardView}
                    initialParams={{cardList : cardList}}
                />
            </Stack.Navigator>
        );
    };

    const StackNavigatorCreate = () => {
        return(
            <Stack.Navigator>
                <Stack.Screen
                    name="Create"
                    component={Create}
                    initialParams={{cardList : cardList}}
                    options={{headerShown : false}}
                />
                <Stack.Screen
                    name="Add a new Card"
                    component={CreateMenu}
                    initialParams={{cardList : cardList}}
                />
            </Stack.Navigator>
        );
    };

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
                            component={StackNavigatorHome}
                        />
                        <Tab.Screen
                            name="Create"
                            component={StackNavigatorCreate}
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

const styles = StyleSheet.create({

});
