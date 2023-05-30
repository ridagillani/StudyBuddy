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
        <View
          style={{
            width: 260,
            height: 40,
            backgroundColor: "#FFEEC2",
            alignSelf: "center",
            flexDirection: "row",
            borderRadius: 50,
            shadowColor: "black",
            shadowOffset: { width: 10, height: 15 },
            shadowOpacity: 5,
            shadowRadius: 5,
            elevation: 8,
            marginBottom: 30,
          }}
        >
          <View
            style={{
              width: 100,
              backgroundColor: "#E4680B",
              borderRadius: 50,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "black",
              shadowOffset: { width: 10, height: 15 },
              shadowOpacity: 5,
              shadowRadius: 5,
              elevation: 8,
            }}
          >
            <Text style={{ fontSize: 16 }}>MCQ'S</Text>
          </View>
          <View
            style={{
              width: 80,
              borderRadius: 50,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "#E4680B" }}>Match</Text>
          </View>
          <View
            style={{
              width: 60,
              borderRadius: 50,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "#E4680B" }}>Identify</Text>
          </View>
        </View>
        <View
          style={{
            width: 190,
            height: 190,
            backgroundColor: "#FFEEC2",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            shadowColor: "black",
            shadowOffset: { width: 10, height: 15 },
            shadowOpacity: 5,
            shadowRadius: 5,
            elevation: 8,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 64,
                color: "#E4680B",
                fontFamily: "Comfortaa-Bold",
              }}
            >
              14
            </Text>
            <Text style={{ fontSize: 16, color: "#E4680B" }}>
              Highest Score
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column-reverse",
            width: "100%",
            height: "35%",
            // backgroundColor: "red",
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
