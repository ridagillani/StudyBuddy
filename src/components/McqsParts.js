import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const McqParts = ({ text, current, onPress, option, correct }) => {
  let uri = require("../assets/icons/Mcq2.png");

  if (current) {
    uri = require("../assets/icons/Mcq2.png");
  } else if (current === false) {
    uri = require("../assets/icons/Mcq1.png");
  } else if (correct) {
    uri = require("../assets/icons/correctAnswer.png");
  } else if (correct === false) {
    uri = require("../assets/icons/wrongAnswer.png");
  }
  
  return (
    <TouchableOpacity
      style={[styles.container, { width: option ? windowWidth * 0.3 : null }]}
      onPress={onPress}>
      <Image source={uri} style={styles.image} />

      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default McqParts;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: windowWidth * 0.0335,
    height: windowHeight * 0.0158,
  },
  text: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 16,
    marginLeft: windowWidth * 0.03,
  },
});
