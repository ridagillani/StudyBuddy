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

const Home = ({ navigation }) => {
  console;
  return (
    <View>
      <ImageBackground
        source={require("../assets/backgroundEl.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.iconsCont}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Menu-right.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Notification-red.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.logonhead}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.heading}>Categories</Text>
          </View>

          <Image
            source={require("../assets/charac3.png")}
            style={styles.charac}
          />
        </View>

        <ScrollView>
          <Categories
            text1={"Birds"}
            pic1={1}
            text2={"Animals"}
            pic2={2}
            onpress1={() => navigation.navigate("Challenges")}
            onpress2={() => navigation.navigate("Challenges")}
          />
          <Categories text1={"Flowers"} pic1={3} text2={"Fruits"} pic2={4} />
          <Categories text1={"Vegetables"} pic1={5} text2={"Maths"} pic2={6} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Home;

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
    width: 50,
    height: 50,
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
    marginTop: 20,
    marginLeft: 10,
  },
});
