import React from "react";
import { ImageBackground, View, Text, Image } from "react-native";

export function WelcomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF6DE" }}>
      <View style={{ paddingBottom: 100 }}>
        <Image source={require("../assets/curveBg.png")} />
      </View>
    </View>
  );
}
// FFF6DE
