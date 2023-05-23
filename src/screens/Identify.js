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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Identify = () => {
  const [input, setInput] = React.useState("");

  return (
    <ImageBackground
      source={require("../assets/Background.png")}
      style={styles.container}>
      <Header />

      <ScrollView>
        <Text style={styles.text}>Birds</Text>

        <View style={styles.subContainer}>
          <CustomButton text={`Score:  ${2}`} />
        </View>

        <Text style={styles.question}>
          Q. Identify the Bird and Write it’s spellings.
        </Text>

        <TouchableOpacity style={styles.hint} onPress={() => {}}>
          <Image
            source={require("../assets/icons/speaker.png")}
            style={styles.image}
          />
          <Text style={styles.hintText}>Hint</Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/Eagle.png")}
          resizeMode="contain"
          style={styles.birdImage}
        />

        <CustomButton text={<Lives />} />

        <CustomInput
          value={input}
          onChangeText={setInput}
          placeholder={"Name"}
        />

        <View style={styles.submit}>
          <CustomButton
            text={"Submit"}
            paddingHorizontal={windowWidth * 0.3}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Identify;

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
  subContainer: {},
  question: {
    color: "#E4680B",
    fontSize: windowWidth * 0.05,
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
    marginVertical: windowHeight * 0.005,
  },
  submit: {
    marginTop: windowHeight * 0.07,
  },
});
