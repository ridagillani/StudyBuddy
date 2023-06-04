import React, { useState } from "react";
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
import ChallengeButton from "../components/ChalllengeButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Challenges = ({ navigation }) => {
  const [Cstate, setCstate] = useState(1);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const s = await AsyncStorage.getItem("score");
        if (s) {
          setScore(parseInt(s));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [navigation]);

  const handlePress = () => {
    if (Cstate === 1) {
      navigation.navigate("MCQ");
    } else if (Cstate === 2) {
      navigation.navigate("Match");
    } else if (Cstate === 3) {
      navigation.navigate("Identify");
    }
  };
  return (
    <View>
      <ImageBackground
        source={require("../assets/challenges.png")}
        resizeMode="cover"
        style={styles.background}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginLeft: 10,
          }}>
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
        <Text
          style={{
            fontSize: 36,
            fontFamily: "Poppins-Medium",
            color: "#E4680B",
            alignSelf: "center",
          }}>
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
          }}>
          Challenge
        </Text>

        <View
          style={{
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
          }}>
          <ChallengeButton
            text={"MCQ's"}
            onpress={() => setCstate(1)}
            state={Cstate === 1 ? true : false}
          />
          <ChallengeButton
            text={"Match"}
            onpress={() => setCstate(2)}
            state={Cstate === 2 ? true : false}
          />
          <ChallengeButton
            text={"Identify"}
            onpress={() => setCstate(3)}
            state={Cstate === 3 ? true : false}
          />
        </View>
        <HighScore score={score} />
        <View
          style={{
            flexDirection: "column-reverse",
            width: "100%",
            height: "35%",
          }}>
          <Pressable onPress={handlePress}>
            <View
              style={{
                width: 230,
                height: 40,
                backgroundColor: "#E4680B",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}>
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
    height: 50,
    width: 50,
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
