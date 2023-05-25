import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";

const Days = ({ day, currentDay, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        currentDay
          ? [styles.daysB, { backgroundColor: "#E4680B" }]
          : styles.daysB
      }
    >
      <Text style={currentDay ? { color: "#ffeec2" } : styles.sameB}>
        {day}
      </Text>
    </TouchableOpacity>
  );
};
export default Days;

const styles = StyleSheet.create({
  daysB: {
    height: 35,
    width: 35,
    backgroundColor: "#FFEEC2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  sameB: {
    color: "#E4680B",
    fontSize: 15,
  },
});
