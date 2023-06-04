import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from "react-native";
import PopUp from "../components/PopUp";

import Icon from "react-native-vector-icons/Ionicons";

const ProfileCard = ({ name, password, navigation, secureTextEntry }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = React.useState(secureTextEntry);
  const deleteProfile = async () => {
    try {
      let childP = await AsyncStorage.getItem("childProfile");
      childP = childP != null ? JSON.parse(childP) : []; //array
      childP.pop();
      //delete selected item from array
      console.log(childP);
      await AsyncStorage.setItem("childProfile", JSON.stringify(childP));
      setModalVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.buttonssV}>
        <Text style={styles.name}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.navigate("EditChild")}>
            <Image
              source={require("../assets/edit.png")}
              style={styles.buttonss}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteProfile()}>
            <Image
              source={require("../assets/delete.png")}
              style={styles.buttonss}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginBottom: 15,
        }}
      >
        {show ? (
          <Text style={styles.password}>Password: {password}</Text>
        ) : (
          <Text style={styles.password}>Password: ******</Text>
        )}
        <TouchableOpacity onPress={() => setShow(!show)}>
          {/* <Image source={require("../assets/eye.png")} style={styles.eye} /> */}
          {show ? (
            <Image
              style={{ width: 20, height: 13 }}
              source={require("../assets/icons/eye.png")}
            />
          ) : (
            <Icon name="eye-off" color="#E4680B" size={20} />
          )}
        </TouchableOpacity>
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
            illustration={3}
            message={"Child Deleted"}
            sub={"They must've grown up!"}
            navigation={navigation}
          ></PopUp>
        </Modal>
      </View>
    </View>
  );
};
export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFEEC2",
    marginHorizontal: 25,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonss: {
    height: 35,
    width: 40,
    marginTop: 10,
  },
  buttonssV: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "#E4680B",
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    marginHorizontal: 20,
  },
  password: {
    color: "#E4680B",
    fontFamily: "Poppins-Medium",
  },
  eye: {
    height: 11,
    width: 20,
    marginLeft: 30,
  },
});
