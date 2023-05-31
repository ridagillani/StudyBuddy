import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ChallengeButton = ({ text, onpress, state }) => {
  const styles = StyleSheet.create({
    btn: {
      width: 100,
      backgroundColor: "#E4680B",
      borderRadius: 50,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "black",
      shadowOffset: { width: 10, height: 15 },
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 8,
    },
    btn2: {
      width: 80,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    text1: { fontSize: 16 },
    text2: { fontSize: 16, color: "#E4680B" },
  });

  return (
    <TouchableOpacity
      style={state ? styles.btn : styles.btn2}
      onPress={onpress}
    >
      <Text style={state ? styles.text1 : styles.text2}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ChallengeButton;
