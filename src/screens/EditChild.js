import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import SmallButton from "../components/SmallButton";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const EditChild = ({ navigation }) => {
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
          margin: 15,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Edit Child</Text>
        <View style={{ width: 29 }}></View>
      </View>
      <View style={styles.portion}>
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
        <SmallButton
          onpress={() => navigation.navigate("Profiles")}
          text={"Submit"}
        />
      </View>
    </ImageBackground>
  );
};
export default EditChild;
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    textAlign: "center",
    fontSize: 30,
  },
  portion: {
    marginTop: 20,
  },
});
