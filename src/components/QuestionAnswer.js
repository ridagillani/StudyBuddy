import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import McqParts from "./McqsParts";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const QuestionAnswer = ({correct}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Q1. What’s the name of the bird in this picture?
      </Text>

      <View style={styles.center}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <McqParts
            text={"Eagle"}
            correct={correct === 1 ? true : false}
          />
          <McqParts
            text={"Crow"}
            option
            correct={correct === 2 ? true : false}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <McqParts
            text={"Pigeon"}
            correct={correct === 3 ? true : false}
          />
          <McqParts
            text={"Sparrow"}
            option
            correct={correct === 4 ? true : false}
          />
        </View>
      </View>
    </View>
  );
};

export default QuestionAnswer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.04,
  },
  image: {
    width: windowWidth * 0.0335,
    height: windowHeight * 0.0158,
  },
  text: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 16,
    marginLeft: windowWidth * 0.03,
  },
  center: {
    marginHorizontal: windowWidth * 0.06,
    marginRight: windowWidth * 0.1,
    marginVertical: windowHeight * 0.01,
  },
});
