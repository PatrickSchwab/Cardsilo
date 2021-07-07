import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Home} from './Components/Home';
import {Settings} from './Components/Settings';
import {Create} from "./Components/Create";

const Tab = createBottomTabNavigator();

export default function App() {

    const [cardList, setCardList] = useState([{
        companyName: "Tesla",
        notes: "blablabla",
    }])

    return (
      <>
        <StatusBar/>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            return <MaterialCommunityIcons name="home" size={24} color={color}/>;
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                            return <MaterialCommunityIcons name="account-settings" size={24} color={color} />;
                        } else if (route.name === 'Create') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                            return <MaterialCommunityIcons name="camera-plus-outline" size={24} color={color} />;
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
}

const styles = StyleSheet.create({

});
