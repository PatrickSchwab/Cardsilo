import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    RefreshControl,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from "react-native";
import {Input} from "native-base";

export const SignIn = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    return (
        <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainLoginContainer}>
                    <Text style={styles.titleTextLogin}>Let's sign you in</Text>
                    <Text style={styles.textLogin}>Welcome back. You've been missed! </Text>
                    <View style={styles.loginInputsContainer}>
                        <Input
                            variant="outline"
                            placeholder="Username"
                            onChangeText={(e) => setUsername(e)}
                            value={username}
                            height={60}
                            fontSize={20}
                            marginTop={70}
                            borderColor={"#707070"}
                            style={styles.usernameInputLogin}
                            _light={{
                                placeholderTextColor: "blueGray.400",
                            }}
                            _dark={{
                                placeholderTextColor: "blueGray.50",
                            }}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChangeText={(e) => setPassword(e)}
                            height={60}
                            fontSize={20}
                            marginTop={30}
                            borderColor={"#707070"}
                            style={styles.passwordInputLogin}
                            _light={{
                                placeholderTextColor: "blueGray.400",
                            }}
                            _dark={{
                                placeholderTextColor: "blueGray.50",
                            }}
                        />
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={passwordCheck}
                            onChangeText={(e) => setPasswordCheck (e)}
                            height={60}
                            fontSize={20}
                            marginTop={30}
                            borderColor={"#707070"}
                            style={styles.passwordInputLogin}
                            _light={{
                                placeholderTextColor: "blueGray.400",
                            }}
                            _dark={{
                                placeholderTextColor: "blueGray.50",
                            }}
                        />
                    </View>
                    <View style={styles.dontHaveLoginTextContainer}>
                        <Text style={styles.dontHaveLoginText}>Don't have an account? </Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("SignIn")}
                        >
                            <Text style={{color: "#0E7AFE", fontSize: 15}}>Register here</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.loginButtonLogin}
                        onPress={() => {
                            console.log("trigger login")
                        }}
                    >
                        <Text style={{
                            textAlign: "center",
                            marginBottom: "auto",
                            marginTop: "auto",
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#0E7AFE"
                        }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    titleTextLogin: {
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 100,
    },
    textLogin: {
        fontWeight: "bold",
        fontSize: 20,
        width: 200,
        marginTop: 10,
    },
    mainLoginContainer: {
        marginLeft: 30,
        width: 310,
    },
    loginInputsContainer: {
        marginTop: 60,
    },
    usernameInputLogin: {
        height: 60,
    },
    passwordInputLogin: {
        marginTop: 30,
        height: 60,
    },
    dontHaveLoginTextContainer: {
        flexDirection: "row",
        marginTop: 200
    },
    dontHaveLoginText: {
        fontSize: 15,
    },
    loginButtonLogin: {
        borderColor: "#0E7AFE",
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        width: 310,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 10,
    }
});