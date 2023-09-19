import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';

const PokemonCard = ({ pokemon }) => {
    return (
        <View style={styles.card}>
           <Image source = {{ uri: pokemon.image }} style={styles.image}></Image>
            <Text style={styles.name}>{pokemon.name}</Text>
        </View>
    );
};

export const PokemonApiAxios = () => {
    const [pokemon, setPokemon]= useState([]);

    useEffect(() => {
        axios
            .get("https://actividad-evaluativa-production.up.railway.app/api//pokemon/pokemon ")
            .then((response) =>{
                setPokemon(response.data);
                /* console.log(response.data); */
            })
            .catch((error) =>  {
                console.error("Error al obtener los datos:", error);
            });
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data = {pokemon}
                keyExtractor = {( item ) => item.name.toString()}
                renderItem = {({ item }) => (
                    <PokemonCard pokemon={item} />
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
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
   
});

export default PokemonApiAxios