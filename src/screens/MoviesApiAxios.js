import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, View, FlatList, Text, SafeAreaView, StyleSheet  } from 'react-native';

const MovieCard = ({ movie }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }} style={styles.image}></Image>
            <Text style={styles.title}>{movie.original_title}</Text>
            <Text style={styles.overview}>Overview: {movie.overview}</Text>
            <Text style={styles.releaseDate}>{movie.release_date}</Text>
        </View>
    );
};

export const MoviesApiAxios = () => {
    const [movies, setMovies]= useState([]);

    useEffect(() => {
        axios
            .get("https://actividad-evaluativa-production.up.railway.app/api//movies/movies")
            .then((response) =>{
                setMovies(response.data.results);
                /* console.log(response.data); */
            })
            .catch((error) =>  {
                console.error("Error al obtener los datos:", error);
            });
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data = {movies}
                keyExtractor = {( item ) => item.id.toString()}
                renderItem = {({ item }) => (
                    <MovieCard movie={item} />
                )}
            ></FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 10,
        margin: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    overview: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    releaseDate: {
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
    },
});

export default MoviesApiAxios

