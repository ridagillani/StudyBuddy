import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const SmallButton = ({ text, onpress }) => {
  const styles = StyleSheet.create({
    cbtn: {
      height: 45,
      width: 120,
      backgroundColor: "#E4680B",
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 20,
    },
  });

  return (
    <TouchableOpacity onPress={onpress} style={styles.cbtn}>
      <Text style={{ fontWeight: "500" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
