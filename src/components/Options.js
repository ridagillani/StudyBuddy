import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Options = ({ option, name, next }) => {
  return (
    <TouchableOpacity style={styles.option}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {option === 1 ? (
          <Image
            style={{ height: 17, width: 15 }}
            source={require("../assets/icons/user.png")}
          />
        ) : option === 2 ? (
          <Image
            style={{ height: 22, width: 20 }}
            source={require("../assets/icons/settings.png")}
          />
        ) : option === 3 ? (
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/icons/signout.png")}
          />
        ) : option === 4 ? (
          <Image
            style={{ height: 17, width: 16 }}
            source={require("../assets/icons/leader.png")}
          />
        ) : option === 5 ? (
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../assets/icons/help.png")}
          />
        ) : null}
        <Text style={styles.optiont}>{name}</Text>
      </View>
      <View>
        {next === true ? (
          <Image
            style={{ height: 10, width: 10, marginTop: 1 }}
            source={require("../assets/next.png")}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Options;

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    // marginVertical: 10,
    padding: 8,
    // backgroundColor: "black",
  },
  optiont: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 15,
    marginLeft: 15,
    marginTop: 4,
  },
});
