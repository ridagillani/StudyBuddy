import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const ContinueWith = () => {
  const styles = StyleSheet.create({
    Container: {
      flexDirection: "row",
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    txt: {
      color: "#E4680B",
      fontWeight: "500",
      fontSize: 16,
      marginVertical: 5,
    },
    line: { height: 2, width: 50, backgroundColor: "#E4680B" },
  });

  return (
    <View style={styles.Container}>
      <View style={styles.line}></View>
      <Text style={styles.txt}>
        {" "}
        {"\t"}Or Continue With{"\t"}{" "}
      </Text>
      <View style={styles.line}></View>
    </View>
  );
};

export default ContinueWith;
