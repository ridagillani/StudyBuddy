import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const Notification = ({ heading, txt, pic }) => {
  const styles = StyleSheet.create({
    Container: {
      height: 45,
      width: 120,
    },
    img: {
      height: 45,
      width: 45,
    },
    heading: {
      fontSize: 14,
      color: "#E4680B",
      fontFamily: "Poppins-Medium",
      marginTop: 10,
      marginLeft: 10,
    },
    txt: {
      fontSize: 12,
      color: "#E4680B",
      fontFamily: "Poppins-Light",
      marginLeft: 10,
    },
    line: {
      height: 1,
      width: "70%",
      backgroundColor: "#E4680B",
      alignSelf: "center",
      marginTop: 10,
      opacity: 0.5,
    },
  });

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pic === 1 ? (
          <Image
            style={styles.img}
            source={require("../assets/icons/party.png")}
          />
        ) : null}
        <View>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.txt}>{txt}</Text>
        </View>
      </View>

      <View style={styles.line}></View>
    </View>
  );
};

export default Notification;
