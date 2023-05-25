import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
const EditChild = () => {
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
            marginTop: 15,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ width: 20, height: 20, margin: 20 }}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.header}>Edit Child</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default EditChild;
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
    marginHorizontal: 30,
  },
  header: {
    marginLeft: 70,
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    textAlign: "center",
    fontSize: 30,
  },
});

