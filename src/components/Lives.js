import React from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Lives = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lives: {"  "}</Text>
      <Image
        source={require("../assets/icons/heart.png")}
        style={styles.image}
      />
      <Image
        source={require("../assets/icons/filledHeart.png")}
        style={styles.image}
      />
      <Image
        source={require("../assets/icons/filledHeart.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Lives;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#FFF6DE",
    fontSize: windowWidth * 0.053,
    fontFamily: "Poppins-Regular",
  },
  image: {
    width: windowWidth * 0.053,
    height: windowHeight * 0.023,
    marginRight: windowWidth * 0.01,
  },
});
