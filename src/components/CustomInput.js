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
        <Image
          style={{ height: 15, width: 15 }}
          source={require("../assets/icons/user.png")}
        />
      ) : option === 2 ? (
        <Image
          style={{ height: 12, width: 20 }}
          source={require("../assets/icons/eye.png")}
        />
      ) : null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.1,
    marginVertical: windowHeight * 0.01,
    flexDirection: "row",
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    color: "#E4680B",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});
