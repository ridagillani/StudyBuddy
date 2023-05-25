import React from "react";
import OrangeCards from "../components/OrangeCard";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import Days from "../components/Days";

const Home = () => {
  console;
  return (
    <View>
      <ImageBackground
        source={require("../assets/backgroundEl.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Image
              source={require("../assets/logo.png")}
              style={{
                height: 100,
                width: 140,
                marginTop: 70,
              }}
            />
            <Text>Categories</Text>
          </View>

          <Image
            source={require("../assets/charac3.png")}
            style={{
              height: 100,
              width: 140,
              marginTop: 70,
            }}
          />
        </View>
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
});
