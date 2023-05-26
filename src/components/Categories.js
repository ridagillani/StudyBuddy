import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const Categories = ({ text1, text2, pic1, pic2, onpress }) => {
  const styles = StyleSheet.create({
    Lcategory: {
      height: 160,
      width: 160,
      backgroundColor: "#FFF6DE",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginLeft: 15,
      shadowColor: "black",
      shadowOffset: { width: 10, height: 15 },
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 8,
    },
    Rcategory: {
      height: 160,
      width: 160,
      backgroundColor: "#FFF6DE",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginRight: 15,
      shadowColor: "black",
      shadowOffset: { width: 10, height: 15 },
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 8,
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    img: { height: 96, width: 89 },
    txt: { fontSize: 16, color: "#E4680B", fontFamily: "Poppins-Medium" },
  });

  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.Lcategory}>
          {pic1 === 1 ? (
            <Image
              style={styles.img}
              source={require("../assets/icons/Birds.png")}
            />
          ) : pic1 === 3 ? (
            <Image
              style={styles.img}
              source={require("../assets/icons/Flowers.png")}
            />
          ) : pic1 === 5 ? (
            <Image
              style={styles.img}
              source={require("../assets/icons/Vegetables.png")}
            />
          ) : null}
          <Text style={styles.txt}>{text1}</Text>
        </View>
      </Pressable>

      <Pressable>
        <View style={styles.Rcategory}>
          {pic2 === 2 ? (
            <Image
              style={styles.img}
              source={require("../assets/icons/Animals.png")}
            />
          ) : pic2 === 4 ? (
            <Image
              style={styles.img}
              source={require("../assets/icons/Fruits.png")}
            />
          ) : pic2 === 6 ? (
            <Image
              style={styles.img}
              source={require("../assets/icons/Maths.png")}
            />
          ) : null}
          <Text style={styles.txt}>{text2}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Categories;
