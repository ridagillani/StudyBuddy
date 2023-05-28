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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Help1 = ({ onPress }) => {
  return (
    <ImageBackground
      source={require("../assets/blurBackground1.png")}
      style={styles.smallImage}>
      <View style={styles.container}>
        <CustomButton text={<Lives />} />
      </View>

      <View style={styles.subContainer}>
        <View style={styles.miniContainer}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.sideText}>
          You got three lives after that game will be over
        </Text>
      </View>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <Icon name="arrow-forward-ios" size={30} color={"#E4680B"} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Help1;

const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.02,
  },
  smallImage: {
    width: windowWidth,
    height: windowHeight * 0.415,
  },
  miniContainer: {
    backgroundColor: "#FFEEC2",
    border: "solid",
    borderRadius: Math.round(windowWidth + windowHeight) / 2,
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 8,
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
    width: windowWidth * 0.57,
    marginLeft: windowWidth * 0.05,
  },
  subContainer: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.05,
    marginTop: windowHeight * 0.04,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 140,
    right: 4,
  },
});
