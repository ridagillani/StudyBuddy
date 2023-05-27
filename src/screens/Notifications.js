import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import Notification from "../components/Notification";

const Notifications = () => {
  console;
  return (
    <View>
      <ImageBackground
        source={require("../assets/backgroundEl.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.iconsCont}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Menu-right.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require("../assets/icons/Notification-red.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.notificationCont}>
            <Text style={styles.heading}>Notifications</Text>
            <Text style={styles.head2}>Notifications (4)</Text>
            <Notification
              heading={"Mode Completed"}
              txt={"Congratulations you have completed\nthe easy mode of Birds"}
              pic={1}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
  },
  iconsCont: {
    flexDirection: "row-reverse",
    marginTop: 20,
    marginLeft: 10,
  },
  icon: {
    height: 40,
    width: 40,
    paddingRight: 20,
  },
  notificationCont: {
    width: "90%",
    backgroundColor: "#FFF6DE",
    height: "100%",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 8,
  },
  heading: {
    fontSize: 24,
    alignSelf: "center",
    color: "#E4680B",
    fontFamily: "Poppins-Medium",
    marginTop: 20,
  },
  head2: {
    fontSize: 18,
    color: "#E4680B",
    fontFamily: "Poppins-Medium",
    marginTop: 10,
    marginLeft: 20,
  },
});
