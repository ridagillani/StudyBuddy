import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const ContinueWith = () => {
  const styles = StyleSheet.create({
    Container: { flexDirection: "row", marginTop: 10, alignSelf: "center" },
    txt: {
      color: "#E4680B",
      fontWeight: "500",
      fontSize: 16,
    },
  });

  return (
    <View style={styles.Container}>
      <Text style={styles.txt}>----- </Text>
      <Text style={styles.txt}>Or Continue With</Text>
      <Text style={styles.txt}> -----</Text>
    </View>
  );
};

export default ContinueWith;
