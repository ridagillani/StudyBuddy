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
const OrangeCards = ({ score }) => {
  return (
    <View style={styles.orangeCards}>
      <Text style={{ color: "#FFEEC2", fontSize: 45 }}>{score}</Text>
      <Text style={{ color: "#FFEEC2", fontSize: 12, textAlign: "center" }}>
        Highest{"\n"}Score
      </Text>
    </View>
  );
};
export default OrangeCards;

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
