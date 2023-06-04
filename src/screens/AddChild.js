import React, { useState } from "react";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ImageBackground,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import CustomInput from "../components/CustomInput";
import SmallButton from "../components/SmallButton";
import PopUp from "../components/PopUp";

const AddChild = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPass] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const addChild = async () => {
    try {
      if (password === cpassword && password !== "" && username !== "") {
        const child = {
          password,
          username,
        };
        let childP = await AsyncStorage.getItem("childProfile");
        childP = childP != null ? JSON.parse(childP) : []; //array
        childP.push(child);
        console.log(childP);
        await AsyncStorage.setItem("childProfile", JSON.stringify(childP));
        setModalVisible(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/backskin.png")}
      resizeMode="cover"
      style={styles.background}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 15,
          justifyContent: "space-between",
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Add Child</Text>
        <View style={{ width: 20 }}></View>
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
          secureTextEntry
        />
        <CustomInput
          value={cpassword}
          onChangeText={setcPass}
          placeholder={"Confirm Password"}
          option={2}
          secureTextEntry
        />
        <SmallButton onpress={addChild} text={"Submit"} />
      </View>
      <View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <PopUp
            illustration={1}
            message={"Child Added"}
            sub={"Learn Faster, Grow Smarter!"}
            navigation={navigation}></PopUp>
        </Modal>
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
