import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const WelcomeSlide = () => {
  const navigation = useNavigation();

  const goToProducts = () => {
    navigation.navigate("Products");
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon");
  };

  const goToMovies = () => {
    navigation.navigate("Movies");
  };

  const goToPosts = () => {
    navigation.navigate("Posts");
  };

  return (
    <Swiper>
      <View style={styles.slide}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={goToProducts}>
            <Text style={styles.buttonText}>Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={goToPokemon}>
            <Text style={styles.buttonText}>Pokemon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={goToMovies}>
            <Text style={styles.buttonText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={goToPosts}>
            <Text style={styles.buttonText}>Posts</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default WelcomeSlide;
