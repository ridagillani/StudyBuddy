import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Signin() {
  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }}>
      <TouchableOpacity style={styles.nav}>
        <Image style={styles.Icon} source={require("../assets/back.png")} />
      </TouchableOpacity>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.welcome}>Welcome!</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor={"#E4680B"}
        style={styles.txtinput}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"#E4680B"}
        style={styles.txtinput}
      />
      <TouchableOpacity style={styles.container}>
        <Text style={styles.label}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cbtn}>
          <Text>Sign in</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
  },
  Icon: {
    marginLeft: 25,
  },
  logo: {
    marginTop: 50,
    alignSelf: "center",
  },
  welcome: {
    fontSize: 32,
    fontWeight: "500",
    color: "#E4680B",
    textAlign: "center",
    marginVertical: 10,
  },
  txtinput: {
    backgroundColor: "white",
    paddingLeft: 20,
    opacity: 0.4,
    width: "75%",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 5,
  },
  container: {
    flexDirection: "row-reverse",
    width: "85%",
    marginTop: 5,
  },
  label: {
    color: "#E4680B",
  },
  cbtn: {
    height: 50,
    width: 120,
    backgroundColor: "#E4680B",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
});
