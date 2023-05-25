import React from "react";
import { TextInput, View, StyleSheet, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  option,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor="#E4680B"
      />
      {option === 1 ? (
        <Image source={require("../assets/icons/settings.png")} />
      ) : null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.07,
    marginVertical: windowHeight * 0.02,
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    color: "#E4680B",
    fontFamily: "Poppins-Regular",
    fontSize: 17,
  },
});
