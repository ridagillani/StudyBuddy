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
import Header from "../components/Header";
import Help1 from "../components/Help1";
import Help2 from "../components/Help2";
import Help3 from "../components/Help3";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Help = ({ navigation }) => {
  const [count, setCount] = React.useState(1);
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.container}>
      <Header
        color={"#FFEEC2"}
        option
        navigation={navigation}
        onButtonPress={() => navigation.openDrawer()}
      />
      <Text style={styles.text}>Help</Text>

      <Image source={require("../assets/help.png")} style={styles.image} />

      {count === 1 ? (
        <Help1 onPress={() => setCount(2)} />
      ) : count === 2 ? (
        <Help2
          onForwardPress={() => setCount(3)}
          onBackPress={() => setCount(1)}
        />
      ) : count === 3 ? (
        <Help3
          onForwardPress={() => navigation.navigate("Help4")}
          onBackPress={() => setCount(2)}
        />
      ) : (
        setCount(1)
      )}
    </ImageBackground>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerText: { alignItems: "center" },
  image: {
    width: windowWidth,
    height: windowHeight * 0.45,
    marginBottom: windowHeight * 0.01,
  },
  text: {
    color: "#E4680B",
    fontSize: windowWidth * 0.1,
    fontFamily: "Poppins-Medium",
    alignSelf: "center",
  },
});
