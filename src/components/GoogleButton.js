import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const GoogleButton = ({ text, onpress }) => {
  const styles = StyleSheet.create({
    Container: {
      flexDirection: "row",
      marginTop: 10,
      alignSelf: "center",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      height: 50,
      width: "75%",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    logo: { height: 35, width: 35, marginRight: 10 },
    txt: { fontSize: 16, color: "black", marginHorizontal: 10 },
  });

  return (
    <TouchableOpacity style={styles.Container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.logo}
          source={require("../assets/icons/Google.png")}
        ></Image>
        <Text style={styles.txt}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;
