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

const ResultButton = ({ text, uri, option, onPress, answer }) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: "Poppins-Regular",
      color: option ? "#FFF6DE" : "#E4680B",
      fontSize: option ? 12 : 16,
      alignSelf: "center",
    },
    subContainer: {
      backgroundColor: option ? "#E4680B" : "#FFE6A6",
      paddingVertical: option ? windowHeight * 0.02 : windowHeight * 0.02,
      borderRadius: 13,
      paddingHorizontal:
        option === 1
          ? windowWidth * 0.072
          : option
          ? windowWidth * 0.06
          : answer
          ? windowWidth * 0.055
          : windowWidth * 0.072,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: option === 1 ? windowWidth * 0.095 : windowWidth * 0.12,
      height: windowHeight * 0.051,
    },
  });
  return (
    <TouchableOpacity style={styles.subContainer} onPress={onPress}>
      <Image source={uri} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default ResultButton;
