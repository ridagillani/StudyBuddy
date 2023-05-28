import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Options from "./Options";

const MenuParent = () => {
  return (
    <View style={{ width: "60%", height: "100%", backgroundColor: "#FFEEC2" }}>
      <View style={styles.user}>
        <Image
          source={require("../assets/user.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.cp}>Rida{"\n"}Gillani</Text>
      </View>
      <View style={styles.line}></View>
      <Options option={1} name={"Profiles"} next={true} />
      <Options option={2} name={"Settings"} next={true} />
      <Options option={3} name={"Sign Out"} />
    </View>
  );
};

export default MenuParent;

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 20,
    paddingLeft: 30,
  },
  cp: {
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    fontSize: 22,
    marginLeft: 15,
  },
  line: {
    backgroundColor: "#E4680B",
    height: 0.8,
    width: 170,
    alignSelf: "center",
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 20,
  },
  optiont: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 15,
    marginLeft: 15,
  },
});
