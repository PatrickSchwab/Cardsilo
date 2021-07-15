import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { NotifierWrapper } from 'react-native-notifier';
import {Home} from './Components/view/Home';
import {Settings} from './Components/Settings';
import {Create} from "./Components/create/Create";
import {CardView} from "./Components/view/CardView";
import {CreateMenu} from "./Components/create/CreateMenu";
import {Starting} from "./Components/logIn/Starting";
import {SignIn} from "./Components/logIn/SignIn";
import {LogIn} from "./Components/logIn/LogIn";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    const updateCard = (props) => {
        const cL = cardList;
        cL[props.id].companyName = props.companyName;
        cL[props.id].notes = props.notes;
        setCardList(cL);
    };

    const deleteCard = (props) => {
        const cL = cardList.filter(x => {
            return x.id !== props.id;
        });
        console.log(props.id)
        setCardList(cL);
    };

    const HomeComponent = (props) => (
        <Home cardList={cardList} updateCard={updateCard} deleteCard={deleteCard} navigation={props.navigation} />
    )

    const CreateComponent = (props) => (
        <Create addCard={addCard} navigation={props.navigation} />
    )

    const SignInComponent = (props) => (
        <SignIn navigation={props.navigation} />
    )

    const LogInComponent = (props) => (
        <LogIn navigation={props.navigation} />
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
                <NotifierWrapper>
                    <StatusBar/>
                    <NavigationContainer>
                        {isLoggedIn ?
                            (
                                <>
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
                                </>
                            ) : (
                                <>
                                    <Stack.Navigator>
                                        <Stack.Screen
                                            name="Starting"
                                            component={Starting}
                                            options={{
                                                headerShown: false,
                                                headerTitle: "Homepage",
                                            }}
                                        />
                                        <Stack.Screen
                                            name="LogIn"
                                            component={LogInComponent}
                                            options={{
                                                headerShown: false,
                                                headerTitle: "Log In",
                                            }}
                                        />
                                        <Stack.Screen
                                            name="SignIn"
                                            component={SignInComponent}
                                            options={{
                                                headerShown: false,
                                                headerTitle: "Sign In",
                                            }}
                                        />
                                    </Stack.Navigator>
                                </>
                            )
                        }

                    </NavigationContainer>
                </NotifierWrapper>
            </NativeBaseProvider>
        </>
    );
}
