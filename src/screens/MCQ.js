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
import CustomInput from "../components/CustomInput";
import Lives from "../components/Lives";
import McqParts from "../components/McqsParts";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MCQ = ({ navigation }) => {
  const [current, setCurrent] = React.useState(false);

  return (
    <ImageBackground
      source={require("../assets/Background.png")}
      style={styles.container}>
      <Header color={"#E4680B"} navigation={navigation} />

      <ScrollView>
        <Text style={styles.text}>Birds</Text>

        <CustomButton text={`Score:  ${2}`} />

        <Image
          source={require("../assets/pigeon2.png")}
          style={styles.birdImage}
        />

        <CustomButton text={<Lives />} />

        <Text style={styles.question}>
          Q3. What’s the name of the bird in this picture?
        </Text>

        <View style={styles.center}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <McqParts
              text={"Eagle"}
              current={current === 1 ? true : false}
              onPress={() => setCurrent(1)}
            />
            <McqParts
              text={"Crow"}
              option
              current={current === 2 ? true : false}
              onPress={() => setCurrent(2)}
            />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <McqParts
              text={"Pigeon"}
              current={current === 3 ? true : false}
              onPress={() => setCurrent(3)}
            />
            <McqParts
              text={"Sparrow"}
              option
              current={current === 4 ? true : false}
              onPress={() => setCurrent(4)}
            />
          </View>
        </View>

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

export default MCQ;

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
  hint: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.06,
    alignItems: "center",
    alignSelf: "flex-end",
  },
  image: {
    width: windowWidth * 0.06,
    height: windowHeight * 0.028,
  },
  hintText: {
    color: "#E4680B",
    fontSize: windowWidth * 0.05,
    marginLeft: windowWidth * 0.02,
    fontFamily: "Poppins-Regular",
  },
  birdImage: {
    height: windowHeight * 0.33,
    width: windowWidth * 0.78,
    alignSelf: "center",
    marginVertical: windowHeight * 0.02,
  },
  submit: {
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.03,
  },
  center: {
    marginHorizontal: windowWidth * 0.09,
    marginRight: windowWidth * 0.2,
    marginVertical: windowHeight * 0.02,
  },
});
