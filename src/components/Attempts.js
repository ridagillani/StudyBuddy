import React from "react";
import OrangeCards from "./OrangeCard";
import { StyleSheet, Text, View, Pressable } from "react-native";
const Attempts = ({ number, game }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFF1CD",
        borderRadius: 20,
        marginHorizontal: 15,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 25,
        }}
      >
        <Text style={{ color: "#E4680B", fontSize: 20, padding: 10 }}>
          Attempt {number}
        </Text>
        <View
          style={{
            backgroundColor: "#E4680B",
            width: 70,
            height: 25,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFEEC2",
              fontSize: 10,
              textAlign: "center",
            }}
          >
            {game}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
          marginHorizontal: 10,
        }}
      >
        <OrangeCards score={12} />
        <OrangeCards score={16} />
        <OrangeCards score={18} />
      </View>
    </View>
  );
};
export default Attempts;

const styles = StyleSheet.create({
  orangeCards: {
    backgroundColor: "#E4680B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    paddingVertical: 10,
  },
});
