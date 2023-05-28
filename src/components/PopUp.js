import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
const PopUp = ({ illustration, message, sub }) => {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <View style={styles.card}>
        <Image source={require("../assets/cross.png")} style={styles.cross} />
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
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
  },
  cross: {
    height: 18,
    width: 18,
    position: "absolute",
    top: 20,
    left: 20,
  },
});
