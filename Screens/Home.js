import React, { useState } from "react";
import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Home = (props) => {
    const [loading, setLoading] = useState(true);

    if (loading) {
        setTimeout(() => {
            setLoading(!loading);
            props.navigation.navigate("Search");
        }, 1500);
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("../images/image.png")}
                style={styles.image}
            />
            <Text style={styles.greeting}>
                Welcome to your movie encyclopedia!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#006666",
    },
    greeting: {
        fontSize: 25,
        textAlign: "center",
        color: "white",
    },
    image: {
        height: 100,
        width: 100,
        marginBottom: 15,
    },
});

export default Home;
