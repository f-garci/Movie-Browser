import React from "react";
import { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import { API_KEY } from "@env";

const Results = (props) => {
    const [movie, setMovie] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [prevPage, setPrevPage] = useState(page - 1);
    const [search, setSearch] = useState("Star Wars");

    useEffect(() => {
        const getMovies = async (movieName) => {
            const responseMovies = await fetch(
                `http://www.omdbapi.com/?apikey=${API_KEY}=${movieName}&page=${page}`
            )
                .then((response) => response.json())
                .then((data) => data.Search);

            setMovies(responseMovies);
        };
        getMovies(search);
    }, [search, page]);

    const renderMovie = ({ item }) => (
        <TouchableWithoutFeedback
            onPress={() =>
                props.navigation.navigate("Details", {
                    movieName: item.Title,
                })
            }
        >
            <View style={styles.movieCard}>
                <View style={styles.image}>
                    <Image
                        source={{ uri: `${item.Poster}` }}
                        style={styles.poster}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{item.Title}</Text>
                    <Text style={styles.releaseYearText}>
                        Year Released: {item.Year}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder={"Enter movie..."}
                    style={styles.movieInput}
                    onChangeText={(text) => {
                        setMovie(text);
                    }}
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={() => {
                        setPage(1);
                        setPrevPage(page - 1);
                        setMovies([]);
                        setSearch(movie);
                        Keyboard.dismiss();
                    }}
                >
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={movies}
                renderItem={renderMovie}
                keyExtractor={(item) => item.imdbID}
            />

            <View style={styles.navButtonsContainer}>
                {page > 1 && (
                    <TouchableOpacity
                        style={styles.navigationButtons}
                        onPress={() => {
                            setMovies([]);
                            setPage(page - 1);
                            setPrevPage(page - 1);
                        }}
                    >
                        <Text style={styles.buttonLabel}>Previous</Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={styles.navigationButtons}
                    onPress={() => {
                        setMovies([]);
                        setPage(page + 1);
                        setPrevPage(page - 1);
                    }}
                >
                    <Text style={styles.buttonLabel}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003333",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 10,
        paddingBottom: 10,
    },
    movieInput: {
        backgroundColor: "white",
        width: "70%",
        borderRadius: 60,
        paddingLeft: 13,
        padding: 5,
    },
    searchButton: {
        backgroundColor: "white",
        width: 80,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
    },
    navButtonsContainer: {
        height: 55,
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 5,
    },
    navigationButtons: {
        width: 85,
        height: 45,
        justifyContent: "center",
        borderRadius: 7,
        backgroundColor: "white",
    },
    buttonLabel: {
        textAlign: "center",
        fontSize: 15,
    },
    movieCard: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#006666",
        margin: 10,
        borderRadius: 10,
    },
    image: {
        flex: 1,
    },
    poster: { aspectRatio: 0.9, resizeMode: "contain" },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
    releaseYearText: {
        color: "white",
        textAlign: "center",
        paddingTop: 10,
    },
});

export default Results;
