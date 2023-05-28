import React from "react";
import {
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomInput from "../components/CustomInput";
import ContinueWith from "../components/ContinueWith";
import GoogleButton from "../components/GoogleButton";
import SmallButton from "../components/SmallButton";

export default function Signin({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Image
          style={styles.Icon}
          source={require("../assets/icons/back.png")}
        />
      </TouchableOpacity>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.welcome}>Welcome!</Text>

      <CustomInput
        value={username}
        onChangeText={setUsername}
        placeholder={"Username"}
        option={1}
      />
      <CustomInput
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        option={2}
        secureTextEntry
      />
      <TouchableOpacity style={styles.container}>
        <Text style={styles.label}>Forgot Password?</Text>
      </TouchableOpacity>
      <SmallButton
        text={"Sign in"}
        onpress={() => navigation.navigate("Home")}
      />
      <ContinueWith />
      <GoogleButton text={"Sign in with Google"} />
      <Text style={styles.label2}>
        Don't Have an account?
        <Text
          onPress={() => navigation.navigate("Signup")}
          style={styles.signup}
        >
          Sign up
        </Text>{" "}
        now
      </Text>
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
    marginTop: 40,
    alignSelf: "center",
    height: 110,
    width: 180,
  },
  welcome: {
    fontSize: 32,
    fontWeight: "500",
    color: "#E4680B",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },

  container: {
    flexDirection: "row-reverse",
    width: "90%",
  },
  label: {
    color: "#E4680B",
    fontWeight: "500",
  },
  label2: {
    color: "#E4680B",
    fontWeight: "500",
    marginTop: 5,
    alignSelf: "center",
    fontSize: 16,
  },

  signup: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
