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
import CustomInput from "../components/CustomInput";
import ContinueWith from "../components/ContinueWith";
import GoogleButton from "../components/GoogleButton";
import SmallButton from "../components/SmallButton";

export default function Signup({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpass, setCpass] = React.useState("");
  const [phone, setPhone] = React.useState("");

  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate("Signin")}
      >
        <Image
          style={styles.Icon}
          source={require("../assets/icons/back.png")}
        />
      </TouchableOpacity>
      <Text style={styles.welcome}>Sign up</Text>

      <CustomInput
        value={username}
        onChangeText={setUsername}
        placeholder={"Username"}
        option={1}
      />
      <CustomInput
        value={phone}
        onChangeText={setPhone}
        placeholder={"Phone no."}
        option={3}
      />
      <CustomInput
        value={password}
        onChangeText={setPassword}
        placeholder={"Password"}
        option={2}
        secureTextEntry
      />
      <CustomInput
        value={cpass}
        onChangeText={setCpass}
        placeholder={"Confirm Password"}
        option={2}
        secureTextEntry
      />

      <SmallButton
        text={"Sign up"}
        onpress={() => navigation.navigate("Parent", { screeen: "Drawer" })}
      />
      <ContinueWith />
      <GoogleButton text={"Sign up with Google"} />
      <Text style={styles.label2}>
        Have an account?
        <Text
          onPress={() => navigation.navigate("Signin")}
          style={styles.signin}
        >
          {" "}
          Sign in
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
    marginBottom: 30,
    marginTop: 60,
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

  signin: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
