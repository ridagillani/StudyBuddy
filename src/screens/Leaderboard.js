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
import Score from "../components/Score";

const Leaderboard = ({ navigation }) => {
  console;
  return (
    <View>
      <ImageBackground
        source={require("../assets/backgroundEl.png")}
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
          <Pressable onPress={() => navigation.goBack()}>
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
        <View style={styles.container}>
          <Text style={styles.heading}>Growing{"\n"}Smarter</Text>

          <Image
            source={require("../assets/Congratulations1.png")}
            style={styles.charac}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Image
            style={{ height: 30, width: 40 }}
            source={require("../assets/icons/trophy.png")}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: "Poppins-Medium",
              color: "#E4680B",
              marginLeft: 10,
              marginBottom: 10,
            }}
          >
            Leaderboard
          </Text>
        </View>
        <Score name={"Areeba Faheem"} score={"21"} />
        <Score name={"Areeba Faheem"} score={"21"} />
      </ImageBackground>
    </View>
  );
};

export default Leaderboard;

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
    fontSize: 32,
    fontFamily: "Comfortaa-Bold",
    color: "white",
    marginLeft: 40,
  },
  charac: {
    height: 170,
    width: 190,
    marginTop: 10,
  },
  icon: {
    height: 40,
    width: 40,
    paddingRight: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  iconsCont: {
    flexDirection: "row-reverse",
    marginLeft: 10,
  },
});
