import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "./src/stack/HomeStack";


const Tab = createBottomTabNavigator();

export default function App() {

  console.log("Entre al app")
  fetch("https://fakestoreapi.com/products/",{
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) =>{
      console.log(responseJson);
    })
    .catch((error) =>{
      console.error(error);
    })
  componentDidMount = ()=>{
    

  }
  
  const [userRegistered, setUserRegistered] = useState(false);

  const handleOrientationComplete = () => {
    setUserRegistered(!userRegistered);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStylePortrait: {
    backgroundColor: "#2181CD",
    height: 100,
  },
  headerStyleLandscape: {
    backgroundColor: "#2181CD",
    height: 50,
  },
});
