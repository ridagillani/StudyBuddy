import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";

import Categories from "../components/Categories";
import HighScore from "../components/HighScore";
import ChallengeComponent from "../components/ChallengeComponent";

const Challenges = ({ navigation }) => {
  console;
  return (
    <View>
      <ImageBackground
        source={require("../assets/challenges.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <Pressable>
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../assets/icons/back.png")}
            />
          </Pressable>
          <View style={styles.iconsCont}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.icon}
                source={require("../assets/icons/Menu-right.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.icon}
                source={require("../assets/icons/Notification-red.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            fontSize: 36,
            fontFamily: "Poppins-Medium",
            color: "#E4680B",
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
          Birds
        </Text>
        <Text
          style={{
            fontSize: 28,
            // fontFamily: "Poppins",
            color: "#E4680B",
            alignSelf: "center",
            marginBottom: 10,
            fontWeight: "500",
          }}
        >
          Challenge
        </Text>

        <ChallengeComponent />
        <HighScore score={"24"} />
        <View
          style={{
            flexDirection: "column-reverse",
            width: "100%",
            height: "35%",
          }}
        >
          <Pressable>
            <View
              style={{
                width: 230,
                height: 40,
                backgroundColor: "#E4680B",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Start</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Challenges;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },
  logo: {
    height: 90,
    width: 140,
    marginLeft: 10,
  },
  heading: {
    fontSize: 28,
    fontFamily: "Poppins-Medium",
    color: "white",
  },
  charac: {
    height: 160,
    width: 180,
    marginRight: 20,
    marginTop: 10,
  },
  icon: {
    height: 40,
    width: 40,
    paddingRight: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logonhead: {
    flexDirection: "column",
    marginLeft: 20,
    justifyContent: "space-between",
  },

  iconsCont: {
    flexDirection: "row-reverse",
    // marginTop: 20,
    marginLeft: 10,
  },
});