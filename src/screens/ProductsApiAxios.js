import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, View, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';

const ProductsCard = ({ product }) => {
    return (
        <View style={styles.card}>
           <Image source = {{ uri: product.image }} style={styles.image}></Image>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.category}>{product.category}</Text>
        </View>
    );
};

export const ProductApiAxios = () => {
    const [products, setProducts]= useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/")
            .then((response) =>{
                setProducts(response.data);
                /* console.log(response.data); */
            })
            .catch((error) =>  {
                console.error("Error al obtener los datos:", error);
            });
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={products}
                keyExtractor={(item)=>item.id.toString()}
                renderItem = {({ item }) => (
                    <ProductsCard product={item} />
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
    price: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    category: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
   
});

export default ProductApiAxios