import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import SmallButton from "../components/SmallButton";
import PopUp from "../components/PopUp";
import firestore from "@react-native-firebase/firestore";

import {
  ImageBackground,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const EditChild = ({ navigation }) => {
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
          secureTextEntry
        />
        <CustomInput
          value={cpassword}
          onChangeText={setcPass}
          placeholder={"Confirm Password"}
          option={2}
          secureTextEntry
        />
        <SmallButton onpress={() => setModalVisible(true)} text={"Update"} />
      </View>
      <View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <PopUp
            illustration={1}
            message={"Child Edited"}
            sub={"Learn Faster, Grow Smarter!"}
            navigation={navigation}
          ></PopUp>
        </Modal>
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
