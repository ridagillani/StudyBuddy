import React from "react";
import { ImageBackground, View, Text, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      // Change your screen name here with "Identify"
      navigation.navigate("Main", { screen: "Identify" });
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={{ flex: 1, flexDirection: "column-reverse" }}>
      <Image
        source={require("../assets/charac1.png")}
        style={{
          alignSelf: "flex-end",
          height: 250,
          width: 250,
          marginTop: 70,
        }}
      />
      <Image source={require("../assets/logo.png")} />
    </ImageBackground>
  );
}
