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
import Icon from "react-native-vector-icons/MaterialIcons";
import QuestionAnswer from "../components/QuestionAnswer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Answers = () => {
  return (
    <ImageBackground
      source={require("../assets/Background.png")}
      style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.miniContainer}>
          <Icon name="arrow-back-ios" size={30} color={"#E4680B"} />
        </TouchableOpacity>
        <Text style={styles.text}>Answers</Text>
      </View>

      <ScrollView>
        <QuestionAnswer correct={1} />
        <QuestionAnswer correct={3} />
        <QuestionAnswer correct={2} />
        <QuestionAnswer correct={4} />
        <QuestionAnswer correct={2} />
        <QuestionAnswer correct={3} />
        <QuestionAnswer correct={1} />
      </ScrollView>
    </ImageBackground>
  );
};

export default Answers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: windowWidth * 0.06,
    marginVertical: windowHeight * 0.03,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    fontSize: 26,
    alignSelf: "center",
  },
  miniContainer: {
    marginRight: windowWidth * 0.2,
  },
});
