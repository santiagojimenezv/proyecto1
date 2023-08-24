import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const WelcomeSlide = () => {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate("Registro");
  };
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const Slide1 = () => {
    return (
      <View>
        <ImageBackground
          source={require("./images/img1.jpg")}
          style={styles.imgBackground}
        ></ImageBackground>
      </View>
    );
  };
  const Slide2 = () => {
    return (
      <View>
        <ImageBackground
          source={require("./images/img2.jpg")}
          style={styles.imgBackground}
        ></ImageBackground>
      </View>
    );
  };
  const Slide3 = () => {
    return (
      <View>
        <ImageBackground
          source={require("./images/carrito.png")}
          style={styles.imgBackground}
        >
          <Button title="Registrarse" onPress={goToRegister} />
          <Button title="Iniciar sesión" onPress={goToLogin} />
        </ImageBackground>
      </View>
    );
  };

  return (
    <Swiper>
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </Swiper>
  );
};
const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: "90%",
  },
});
export default WelcomeSlide;