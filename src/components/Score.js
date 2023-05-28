import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const Score = ({ name, score }) => {
  const styles = StyleSheet.create({
    container: {
      height: 55,
      width: "90%",
      backgroundColor: "#FFEEC2",
      shadowColor: "black",
      shadowOffset: { width: 10, height: 15 },
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 8,
      alignSelf: "center",
      borderRadius: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    cont2: { marginLeft: 20, flexDirection: "row", alignItems: "center" },
    num: {
      color: "#E4680B",
      fontSize: 14,
      fontFamily: "Poppins-Medium",
    },
    img: { height: 30, width: 30, marginLeft: 15 },
    name: {
      color: "#E4680B",
      fontSize: 14,
      fontFamily: "Poppins",
      marginLeft: 15,
    },
    Score: {
      color: "#E4680B",
      fontSize: 14,
      fontFamily: "Poppins-Medium",
      marginRight: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.cont2}>
        <Text style={styles.num}>1</Text>
        <Image
          style={styles.img}
          source={require("../assets/icons/user2.png")}
        />
        <Text style={styles.name}>{name}</Text>
      </View>

      <Text style={styles.Score}>{score}</Text>
    </View>
  );
};

export default Score;
