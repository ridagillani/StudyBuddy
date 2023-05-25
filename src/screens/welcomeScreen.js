import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

<<<<<<< HEAD
const WelcomeScreen = () => {
=======
export default function WelcomeScreen() {
>>>>>>> 6dac225c29c2a729d7d5e57c231fd79dc603b7ac
  return (
    <ImageBackground source={require("../assets/cBG.png")} style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginTop: 140 }}>
          <Text style={styles.heading}>Welcome to{"\n"}Study Buddy</Text>
        </View>
        <Image source={require("../assets/charac.png")} />
        <Text style={styles.tLine}>Learn Faster, Grow Smarter</Text>
        <Text style={styles.stxt}>Start as</Text>
        <View style={styles.btnsView}>
          <TouchableOpacity>
            <View style={styles.cbtn}>
              <Text>Child</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.gBtn}>
              <Text style={{ color: "#E4680B" }}>Guardian</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
<<<<<<< HEAD
};

export default WelcomeScreen;

// FFF6DE
=======
}

const styles = StyleSheet.create({
  gBtn: {
    height: 40,
    width: 100,
    borderColor: "#E4680B",
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  cbtn: {
    height: 40,
    width: 100,
    backgroundColor: "#E4680B",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    textAlign: "center",
    fontFamily: "Comfortaa-Bold",
  },
  tLine: {
    fontSize: 20,
    color: "#E4680B",
    fontWeight: "500",
    marginTop: 30,
    fontFamily: "Comfortaa-Bold",
  },
  stxt: {
    fontSize: 18,
    color: "#E4680B",
    fontWeight: "400",
  },
  btnsView: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
});
>>>>>>> 6dac225c29c2a729d7d5e57c231fd79dc603b7ac
