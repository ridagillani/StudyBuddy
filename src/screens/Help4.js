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
import MatchItem from "../components/MatchItem";
import { matchData } from "../model/MatchData";
import Icon from "react-native-vector-icons/MaterialIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Help4 = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/blurBackground3.png")}
      style={{ flex: 1 }}>
      <View style={{ marginTop: windowHeight * 0.25 }}>
        {matchData.map((item) => {
          if (item.id <= 2) {
            return <MatchItem uri={item.uri} text={item.name} key={item.id} />;
          }
        })}
      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={30} color={"#E4680B"} />
        </TouchableOpacity>

        <View style={styles.miniContainer}>
          <Text style={styles.text}>4</Text>
        </View>
        <Text style={styles.sideText}>Match The Picture with right option</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Help5")}>
          <Icon name="arrow-forward-ios" size={30} color={"#E4680B"} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Help4;

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
  },
  subContainer: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.145,
    marginTop: windowHeight * 0.07,
    alignItems: "center",
    justifyContent: "center",
  },
});
