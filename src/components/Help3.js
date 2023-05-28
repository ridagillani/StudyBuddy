import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomButton from "../components/Button";
import Lives from "../components/Lives";
import Icon from "react-native-vector-icons/MaterialIcons";
import McqParts from "./McqsParts";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Help3 = ({ onForwardPress, onBackPress }) => {
  return (
    <ImageBackground
      source={require("../assets/blurBackground2.png")}
      style={styles.smallImage}>
      <TouchableOpacity style={styles.leftIcon} onPress={onBackPress}>
        <Icon name="arrow-back-ios" size={30} color={"#E4680B"} />
      </TouchableOpacity>

      <View style={styles.miniContainer}>
        <Text style={styles.text}>3</Text>
      </View>
      <Text style={styles.sideText}>Submit your Answer</Text>

      <View style={styles.submit}>
        <CustomButton
          text={"Submit"}
          paddingHorizontal={windowWidth * 0.3}
          onPress={() => navigation.navigate("GameOver")}
        />
      </View>

      <TouchableOpacity style={styles.icon} onPress={onForwardPress}>
        <Icon name="arrow-forward-ios" size={30} color={"#E4680B"} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Help3;

const styles = StyleSheet.create({
  smallImage: {
    width: windowWidth,
    height: windowHeight * 0.415,
  },
  miniContainer: {
    backgroundColor: "#FFEEC2",
    border: "solid",
    borderRadius: Math.round(windowWidth + windowHeight) / 2,
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 8,
    alignSelf: "center",
    marginTop: windowHeight * 0.18,
  },
  text: {
    color: "#E4680B",
    fontSize: windowWidth * 0.06,
    fontFamily: "Comfortaa-Bold",
  },
  sideText: {
    color: "#E4680B",
    fontSize: windowWidth * 0.056,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    marginBottom: windowHeight * 0.01,
  },
  subContainer: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.1,
    marginTop: windowHeight * 0.02,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 140,
    right: 4,
  },
  leftIcon: {
    position: "absolute",
    top: 140,
    left: 4,
  },

  submit: {
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.03,
  },
});
