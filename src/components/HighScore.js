import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const HighScore = ({ score }) => {
  const styles = StyleSheet.create({
    container: {
      width: 190,
      height: 190,
      backgroundColor: "#FFEEC2",
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      shadowColor: "black",
      shadowOffset: { width: 10, height: 15 },
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 8,
    },
    score: {
      fontSize: 64,
      color: "#E4680B",
      fontFamily: "Comfortaa-Bold",
    },
    txt: { fontSize: 16, color: "#E4680B" },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.txt}>Highest Score</Text>
      </View>
    </View>
  );
};

export default HighScore;
