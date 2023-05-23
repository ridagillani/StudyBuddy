import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CustomButton = ({
  text,
  paddingHorizontal,
  paddingVertical,
  onPress,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E4680B",
      paddingVertical: paddingVertical ? paddingVertical : windowHeight * 0.004,
      paddingHorizontal: paddingHorizontal
        ? paddingHorizontal
        : windowWidth * 0.07,
      borderRadius: windowWidth * 0.03,
      alignSelf: "center",
      alignItems: "center",
    },
    text: {
      color: "#FFF6DE",
      fontSize: windowWidth * 0.053,
      fontFamily: "Poppins-Regular",
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
