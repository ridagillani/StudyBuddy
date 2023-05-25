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
const PopUp = () => {
  return (
    <View>
      {/* <ImageBackground
        source={require("../assets/blur.png")}
        resizeMode="cover"
        style={styles.background}
      ></ImageBackground> */}
    </View>
  );
};
export default PopUp;

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
