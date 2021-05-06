import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import Results from "../Screens/Results";
import Details from "../Screens/Details";

const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Results}
                options={{
                    headerStyle: {
                        backgroundColor: "#007f7f",
                    },
                    headerTitleStyle: { color: "white" },
                    headerLeft: null,
                }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerStyle: {
                        backgroundColor: "#007f7f",
                    },
                    headerTitleStyle: { color: "white" },
                }}
            />
        </Stack.Navigator>
    );
};

export { HomeScreenStack };
