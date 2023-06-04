import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const PopUp = ({ illustration, message, sub, navigation, onPress }) => {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <View style={styles.card}>
        <TouchableOpacity
          style={{ marginTop: 5, marginLeft: 20 }}
          onPress={onPress ? onPress : () => navigation.goBack()}>
          <Image source={require("../assets/cross.png")} style={styles.cross} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 15,
          }}>
          <Text style={styles.header}>{message}</Text>
          <Text style={styles.subH}>{sub}</Text>
          {/* <Image
            source={require("../assets/addedchar.png")}
            style={styles.char}
          /> */}
          {illustration === 1 ? (
            <Image
              style={styles.char}
              source={require("../assets/addedchar.png")}
            />
          ) : illustration === 2 ? (
            <Image
              style={styles.char}
              source={require("../assets/highchar.png")}
            />
          ) : illustration === 3 ? (
            <Image
              style={styles.char}
              source={require("../assets/wrongchar.png")}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default PopUp;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF6DE",
    paddingVertical: 20,
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 1,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 15,
    shadowRadius: 5,
    elevation: 80,
  },
  char: {
    height: 300,
    width: 270,
    marginTop: 15,
  },
  header: {
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    textAlign: "center",
    fontSize: 23,
  },
  subH: {
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    textAlign: "center",
    fontSize: 13,
    width: 200,
  },
  cross: {
    height: 18,
    width: 18,
  },
});
