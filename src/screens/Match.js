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
import CustomButton from "../components/Button";
import Lives from "../components/Lives";
import MatchItem from "../components/MatchItem";
import { matchData } from "../model/MatchData";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Match = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/Background.png")}
      style={styles.container}
    >
      <Header color={"#E4680B"} navigation={navigation} show />

      <ScrollView>
        <Text style={styles.text}>Birds</Text>
        <CustomButton text={`Score:  ${2}`} />
        <Text style={styles.question}>
          Q. Match the name of the bird with its picture?{" "}
        </Text>
        <View>
          {matchData.map((item) => (
            <MatchItem uri={item.uri} text={item.name} key={item.id} />
          ))}
        </View>
        <CustomButton text={<Lives />} />

        <View style={styles.submit}>
          <CustomButton
            text={"Submit"}
            paddingHorizontal={windowWidth * 0.3}
            onPress={() => navigation.navigate("GameOver")}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Match;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 194, 37, 0.15)",
  },
  text: {
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    fontSize: 36,
    alignSelf: "center",
  },
  question: {
    color: "#E4680B",
    fontSize: windowWidth * 0.045,
    marginHorizontal: windowWidth * 0.06,
    textAlign: "justify",
    marginTop: windowHeight * 0.02,
    fontFamily: "Poppins-Regular",
  },
  submit: {
    marginTop: windowHeight * 0.03,
    marginBottom: windowHeight * 0.03,
  },
});
