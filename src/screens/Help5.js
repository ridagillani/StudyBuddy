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
import Icon from "react-native-vector-icons/MaterialIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Help5 = ({ navigation }) => {
  const [input, setInput] = React.useState("");

  return (
    <ImageBackground
      source={require("../assets/blurBackground.png")}
      style={{ flex: 1 }}
    >
      <Text style={styles.question}>
        Q1. Identify the Bird and Write it’s spellings.
      </Text>

      <Image
        source={require("../assets/Eagle.png")}
        resizeMode="contain"
        style={styles.birdImage}
      />

      <View style={styles.input}>
        <Text style={styles.inputText}>Name</Text>
      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: windowWidth * 0.1 }}
        >
          <Icon name="arrow-back-ios" size={30} color={"#E4680B"} />
        </TouchableOpacity>

        <View style={styles.miniContainer}>
          <Text style={styles.text}>5</Text>
        </View>
        <Text style={styles.sideText}>Identify and enter correct name</Text>
      </View>
      <View style={styles.submit}>
        <CustomButton
          text={"Home"}
          paddingHorizontal={windowWidth * 0.1}
          borderRadius={windowWidth * 0.1}
          onPress={() => navigation.replace("ChildN", { screen: "Home" })}
        />
      </View>
    </ImageBackground>
  );
};

export default Help5;

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
    marginLeft: windowWidth * 0.05,
    width: windowWidth * 0.73,
  },
  subContainer: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.1,
    marginTop: windowHeight * 0.02,
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    color: "#E4680B",
    fontSize: windowWidth * 0.045,
    marginHorizontal: windowWidth * 0.06,
    textAlign: "justify",
    marginTop: windowHeight * 0.2,
    fontFamily: "Poppins-Regular",
  },
  birdImage: {
    height: windowHeight * 0.33,
    width: windowWidth * 0.78,
    alignSelf: "center",
    marginVertical: windowHeight * 0.005,
  },
  input: {
    marginHorizontal: windowWidth * 0.1,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    paddingVertical: 12,
    marginTop: windowHeight * 0.1,
  },
  inputText: {
    color: "#E4680B",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },

  submit: {
    marginTop: windowHeight * 0.035,
    marginBottom: windowHeight * 0.03,
  },
});
