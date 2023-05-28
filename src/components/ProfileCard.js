import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const ProfileCard = ({ name, password, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.buttonssV}>
        <Text style={styles.name}>{name}</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("EditChild")}>
            <Image
              source={require("../assets/edit.png")}
              style={styles.buttonss}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/delete.png")}
              style={styles.buttonss}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginHorizontal: 20,
          marginBottom: 15,
        }}
      >
        <Text style={styles.password}>Password: {password}</Text>
        <TouchableOpacity>
          <Image source={require("../assets/eye.png")} style={styles.eye} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFEEC2",
    marginHorizontal: 25,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonss: {
    height: 35,
    width: 40,
    marginTop: 10,
  },
  buttonssV: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "#E4680B",
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    marginHorizontal: 20,
  },
  password: {
    color: "#E4680B",
    fontFamily: "Poppins-Medium",
  },
  eye: {
    height: 11,
    width: 20,
    marginLeft: 30,
  },
});
