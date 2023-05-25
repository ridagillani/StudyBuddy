import React from "react";
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
import { TextInput } from "react-native-paper";

const ProfileCard = ({ name, password }) => {
  return (
    <View style={styles.card}>
      <View style={styles.buttonssV}>
        <Text style={styles.name}>{name}</Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
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
