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
const Settingss = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
        <TouchableOpacity>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Settings</Text>
        <View style={{ width: 20 }}></View>
      </View>
      <View style={styles.portion}>
        <Image source={require("../assets/user.png")} style={styles.picture} />
        <TouchableOpacity style={styles.buttonss}>
          <Image source={require("../assets/edit.png")} style={styles.image} />
        </TouchableOpacity>
        <CustomInput
          value={username}
          onChangeText={setUsername}
          placeholder={username}
          option={1}
        />
        <CustomInput
          value={phone}
          onChangeText={setPhone}
          placeholder={phone}
          option={3}
        />
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder={email}
          option={4}
        />
        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder={password}
          option={2}
        />

        <SmallButton text={"Update"} />
      </View>
    </ImageBackground>
  );
};
export default Settingss;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },

  picture: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginVertical: 20,
  },
  cp: {
    fontFamily: "Poppins-Regular",
    color: "#E4680B",
    fontSize: 22,
    marginRight: 100,
  },
  header: {
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    color: "#E4680B",
    textAlign: "center",
    fontSize: 30,
  },
  buttonss: {
    position: "absolute",
    top: 190,
    left: 230,
  },
  image: {
    height: 50,
    width: 50,
  },
});
