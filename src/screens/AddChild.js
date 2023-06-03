import React, { useState } from "react";
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
        />
        <CustomInput
          value={cpassword}
          onChangeText={setcPass}
          placeholder={"Confirm Password"}
          option={2}
        />
        <SmallButton onpress={() => setModalVisible(true)} text={"Submit"} />
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <PopUp
            illustration={1}
            message={"Child Added"}
            sub={"Learn Faster, Grow Smarter!"}
          ></PopUp>
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
