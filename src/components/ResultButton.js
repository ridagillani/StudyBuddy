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

const ResultButton = ({ text, uri }) => {
  return (
    <TouchableOpacity style={styles.subContainer}>
      <Image source={uri} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default ResultButton;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 16,
    alignSelf: "center",
  },
  subContainer: {
    backgroundColor: "#FFE6A6",
    paddingVertical: windowHeight * 0.02,
    borderRadius: 10,
    paddingHorizontal: windowWidth * 0.08,
  },
  image: {
    width: windowWidth * 0.12,
    height: windowHeight * 0.051,
  },
});
