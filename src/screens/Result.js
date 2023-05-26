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
import Header from "../components/Header";
import OrangeCards from "../components/OrangeCard";
import ResultButton from "../components/ResultButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Result = () => {
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.container}>
      <Header color={"#FFF6DE"} />
      <Text style={styles.text}>Result</Text>

      <Image source={require("../assets/analytics.png")} style={styles.image} />

      <View style={styles.subContainer}>
        <Text style={styles.summary}>Summary</Text>
        <Text style={styles.score}>Score: 7</Text>
        <View style={styles.card}>
          <OrangeCards score={10} text={"Total\nQuestions"} />
          <OrangeCards score={7} text={"Correct\nAnswers"} />
          <OrangeCards score={70} text={"Percentage"} />
        </View>
      </View>

      <View style={[styles.card, { marginHorizontal: 15 }]}>
        <ResultButton uri={require("../assets/icons/home.png")} text={"Home"} />
        <ResultButton
          uri={require("../assets/icons/retry.png")}
          text={"Retry"}
        />
        <ResultButton uri={require("../assets/icons/menu.png")} text={"Menu"} />
      </View>
    </ImageBackground>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 194, 37, 0.15)",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    color: "#E4680B",
    fontSize: 36,
    alignSelf: "center",
  },
  image: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.4,
    alignSelf: "center",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  summary: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    fontSize: 24,
  },
  score: {
    fontFamily: "Poppins-Italic",
    textAlign: "center",
    color: "#E4680B",
    fontSize: 16,
  },
  subContainer: {
    backgroundColor: "#FFE6A6",
    marginHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.01,
    borderRadius: 10,
  },
});
