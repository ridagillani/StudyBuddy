import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import CustomInput from "../components/CustomInput";
import SmallButton from "../components/SmallButton";

const AddChild = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPass] = useState("");
  return (
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
        <Text style={styles.header}>Add Child</Text>
      </View>
      <View style={styles.portion}>
        <Text style={styles.cp}>Sign Up</Text>
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
        />
        <CustomInput
          value={cpassword}
          onChangeText={setcPass}
          placeholder={"Confirm Password"}
          option={2}
        />
        <SmallButton text={"Submit"} />
      </View>
    </ImageBackground>
  );
};
export default AddChild;
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  cp: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 22,
    marginBottom: 10,
  },

  header: {
    marginLeft: 70,
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    textAlign: "center",
    fontSize: 30,
  },
  portion: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 70,
  },
});