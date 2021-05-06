import React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

const Details = (props) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovies = async (movieName) => {
            const responseMovies = await fetch(
                `http://www.omdbapi.com/?apikey=30f9466e&t=${movieName}`
            ).then((response) => response.json());

            setMovie(responseMovies);
        };
        getMovies(props.route.params.movieName);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerPadding}>
                    <View style={styles.titleContentContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{movie.Title}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Image
                                source={require("../images/Gold_Star.svg.png")}
                                style={styles.ratingImage}
                                resizeMethod={"auto"}
                            />
                            <Text style={styles.descriptionText}>
                                {"  "}
                                {movie.imdbRating}/10
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.descriptionText}>
                        {movie.Rated}
                        {"  "}|{"  "}
                        {movie.Runtime}
                        {"  "}|{"  "}
                        {movie.Genre}
                        {"  "}|{"  "}
                        {movie.Released}
                    </Text>
                </View>
                <View style={styles.imagePadding}>
                    <Image
                        source={{ uri: `${movie.Poster}` }}
                        style={styles.poster}
                    />
                </View>
                <View style={styles.descriptionPadding}>
                    <Text style={styles.descriptionText}>
                        {movie.Plot}
                        {"\n"}
                    </Text>
                    <Text style={styles.descriptionText}>
                        <Text style={styles.descriptionTitle}>Director:</Text>
                        <Text>
                            {" "}
                            {movie.Director}
                            {"\n"}
                        </Text>
                    </Text>
                    <Text style={styles.descriptionText}>
                        <Text style={styles.descriptionTitle}>Writers:</Text>
                        <Text>
                            {" "}
                            {movie.Writer}
                            {"\n"}
                        </Text>
                    </Text>
                    <Text style={styles.descriptionText}>
                        <Text style={styles.descriptionTitle}>Stars:</Text>
                        <Text>
                            {" "}
                            {movie.Actors}
                            {"\n"}
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#003333" },
    headerPadding: { padding: 5 },
    titleContentContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    titleContainer: { flex: 2 },
    title: {
        fontSize: 22,
        color: "white",
        textAlign: "left",
    },
    ratingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    ratingImage: {
        height: 20,
        width: 20,
    },
    descriptionText: { color: "white" },
    imagePadding: { padding: 10 },
    poster: { aspectRatio: 1, resizeMode: "contain" },
    descriptionPadding: { padding: 5 },
    descriptionTitle: { fontWeight: "bold" },
});

export default Details;
