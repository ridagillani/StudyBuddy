import React from "react";
import firestore from "@react-native-firebase/firestore";

import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import ProfileCard from "../components/ProfileCard";
const Profiles = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/backskin.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 15,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.header}>Profiles</Text>
          <View style={{ width: 20 }}></View>
        </View>
        <View style={styles.headings}>
          <Text style={styles.cp}>Child Profiles</Text>
          <TouchableOpacity
            style={styles.add}
            onPress={() => navigation.navigate("AddChild")}
          >
            <Text style={styles.but}>+ Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <ProfileCard
            name={"Muhammad Haseeb"}
            password={"12345678"}
            navigation={navigation}
          />
          <ProfileCard
            name={"Muhammad Haseeb"}
            password={"12345678"}
            navigation={navigation}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Profiles;
const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },
  add: {
    backgroundColor: "#E4680B",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
  },
  but: {
    color: "#FFEEC2",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  cp: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 22,
    marginRight: 100,
  },
  headings: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  header: {
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    textAlign: "center",
    fontSize: 30,
  },
});
