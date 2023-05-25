import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import PopUp from "../components/PopUp";

const ChildAdded = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/bg.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <PopUp></PopUp>
      </ImageBackground>
    </View>
  );
};
export default ChildAdded;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },
  add: {
    backgroundColor: "#E4680B",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
  },
  but: {
    color: "#FFEEC2",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  cp: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 22,
    marginRight: 100,
  },
  headings: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
  header: {
    marginLeft: 70,
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    textAlign: "center",
    fontSize: 30,
  },
});

