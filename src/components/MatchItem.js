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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MatchItem = ({ uri, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={uri}
          style={[styles.image, { marginRight: windowWidth * 0.04 }]}
        />
        <TouchableOpacity >
          <Image
            source={require("../assets/icons/button.png")}
            style={styles.smallIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.subContainer, { width: windowWidth * 0.3 }]}>
        <Image
          source={require("../assets/icons/button.png")}
          style={[styles.smallIcon, { marginRight: windowWidth * 0.04 }]}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default MatchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.07,
    marginVertical: windowHeight * 0.02,
    justifyContent: "space-between",
  },
  image: {
    width: windowWidth * 0.255,
    height: windowHeight * 0.107,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallIcon: {
    width: windowWidth * 0.05,
    height: windowHeight * 0.0235,
  },
  text: {
    color: "#E4680B",
    fontSize: windowWidth * 0.045,
    fontFamily: "Poppins-Regular",
  },
});
