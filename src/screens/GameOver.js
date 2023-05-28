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
import ResultButton from "../components/ResultButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const GameOver = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerText}>
        <Text style={styles.text}>Tough Luck</Text>
        <Text style={styles.subText}>Your Score is: 12</Text>
        <Image source={require("../assets/over.png")} style={styles.image} />
      </View>
      <View style={[styles.card]}>
        <ResultButton
          uri={require("../assets/icons/homeWhite.png")}
          text={"Home"}
          option
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        />
        <ResultButton
          uri={require("../assets/icons/retryWhite.png")}
          text={"Retry"}
          option
          onPress={() => {}}
        />
        <ResultButton
          uri={require("../assets/icons/menuWhite.png")}
          text={"Result"}
          option={1}
          onPress={() => {
            navigation.navigate("Result");
          }}
        />
      </View>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF6DE",
    flex: 1,
  },
  centerText: { alignItems: "center" },
  image: {
    width: windowWidth,
    height: windowHeight * 0.45,
  },
  text: {
    color: "#E4680B",
    fontSize: windowWidth * 0.1,
    fontFamily: "Poppins-Medium",
    marginTop: windowHeight * 0.1,
    marginBottom: windowHeight * 0.02,
  },
  subText: {
    fontFamily: "Poppins-Italic",
    color: "#E4680B",
    fontSize: windowWidth * 0.056,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: windowHeight * 0.04,
    marginHorizontal: windowWidth * 0.03,
  },
});
