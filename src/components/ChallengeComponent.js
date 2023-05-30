import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChallengeComponent = () => {
  const styles = StyleSheet.create({
    container: {
      width: 260,
      height: 40,
      backgroundColor: "#FFEEC2",
      alignSelf: "center",
      flexDirection: "row",
      borderRadius: 50,
      shadowColor: "black",
      shadowOffset: { width: 10, height: 15 },
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 8,
      marginBottom: 30,
    },
    btn: {
      width: 100,
      backgroundColor: "#E4680B",
      borderRadius: 50,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "black",
      shadowOffset: { width: 10, height: 15 },
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 8,
    },
    txt: { fontSize: 16, color: "#E4680B" },
  });

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Text style={{ fontSize: 16 }}>MCQ'S</Text>
      </View>
      <View
        style={{
          width: 80,
          borderRadius: 50,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.txt}>Match</Text>
      </View>
      <View
        style={{
          width: 60,
          borderRadius: 50,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.txt}>Identify</Text>
      </View>
    </View>
  );
};

export default ChallengeComponent;
