import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {StyleSheet} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
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
            type: "org.gs1.EAN-13",
            barCode: "2090007024565",
        },
        {
            id: 1,
            companyName: "Google",
            notes: "blablabla",
            type: "org.gs1.EAN-13",
            barCode: "2090007024565",
        },
        {
            id: 2,
            companyName: "Pepsi",
            notes: "blablabla",
            type: "org.gs1.EAN-13",
            barCode: "2090007024565",
        },
        {
            id: 3,
            companyName: "Migros",
            notes: "blablabla",
            type: "org.gs1.EAN-13",
            barCode: "2090007024565",
        },
        {
            id: 4,
            companyName: "Coop",
            notes: "blablabla",
            type: "org.gs1.EAN-13",
            barCode: "2090007024565",
        },
        {
            id: 5,
            companyName: "Brack",
            notes: "blablabla",
            type: "org.gs1.EAN-13",
            barCode: "2090007024565",
        },
    ]);

    const addCard = (props) => {
        console.log("APP: " + "BarCode: " + props.barCode + " Type: " + props.type + " Company Name: " + props.companyName + " Notes: " + props.notes + " CardList Lenght: " + cardList.length);
        setCardList([...cardList, {
            id: cardList.length,
            companyName: props.companyName,
            notes: props.notes,
            type: props.type,
            barCode: props.barCode
        }])
    };

    useEffect(()=> {
        console.log(cardList);
    },[cardList])

    const HomeComponent = (props) => (
        <Home cardList={cardList} navigation={props.navigation} />
    )

    const CreateComponent = (props) => (
        <Create addCard={addCard} navigation={props.navigation} />
    )

    const StackNavigatorHome = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeComponent}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="CardView"
                    component={CardView}
                />
            </Stack.Navigator>
        );
    };

    const StackNavigatorCreate = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Create"
                    component={CreateComponent}
                    options={{
                        headerShown: false,
                        headerTitle: "Scan",
                    }}
                />
                <Stack.Screen
                    name="CreateMenu"
                    component={CreateMenu}
                    options={{
                        headerTitle: "Add Card",
                    }}
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
                            tabBarIcon: ({color}) => {
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
