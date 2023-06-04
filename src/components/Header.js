import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = ({ color, navigation, option, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-ios" size={30} color={color} />
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={{ marginRight: windowWidth * 0.02 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
            style={styles.counter}>
            <Image
              source={require("../assets/icons/notification_icon.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={onButtonPress} style={styles.counter}>
            {option ? (
              <Image
                source={require("../assets/icons/menu-lines.png")}
                style={{
                  width: windowWidth * 0.045,
                  height: windowHeight * 0.018,
                }}
              />
            ) : (
              <Image
                source={require("../assets/icons/settings.png")}
                style={[styles.image, { height: windowHeight * 0.028 }]}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.06,
    marginTop: windowHeight * 0.02,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counter: {
    backgroundColor: "rgba(255, 246, 222, 1)",
    border: "solid",
    borderRadius: Math.round(windowWidth + windowHeight) / 2,
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 15 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: windowWidth * 0.055,
    height: windowHeight * 0.025,
  },
  row: {
    flexDirection: "row",
  },
});
