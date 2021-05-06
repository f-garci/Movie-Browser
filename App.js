import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreenStack } from "./Navigation/MainNavigator";
import Constants from "expo-constants";

const App = (props) => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#006666" barStyle="light-content" />
            <HomeScreenStack></HomeScreenStack>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
        transform: [{ translateY: Constants.statusBarHeight }],
    },
});

export default App;
