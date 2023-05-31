import {
  View,
  Text,
  Image,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

function CustomDrawer(props) {
  const routeName = props.state.routeNames[0];
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    user: {
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      marginVertical: 20,
      paddingLeft: routeName === "Home" ? 10 : 25,
    },
    cp: {
      fontFamily: "Poppins-Medium",
      color: "#E4680B",
      fontSize: 21,
      marginLeft: 15,
      width: width * 0.4,
      marginRight: width * 0.02,
    },
    line: {
      backgroundColor: "#E4680B",
      height: 1,
      width: 170,
      alignSelf: "center",
      marginBottom: 10,
    },
    option: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 15,
      marginVertical: 20,
    },
    optiont: {
      fontFamily: "Poppins-Regular",
      color: "#E4680B",
      fontSize: 15,
      marginLeft: 15,
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: "#FFEEC2" }}>
      <View>
        <View style={styles.user}>
          <Image
            source={require("../assets/user.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={styles.cp}>Muhammad{"\n"}Haseeb</Text>
        </View>
        <View style={styles.line}></View>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={"SignOut"}
          icon={() => (
            <Image
              source={require("../assets/icons/signout.png")}
              style={{
                width: width * 0.0552,
                height: height * 0.0268,
              }}
            />
          )}
          labelStyle={{
            color: "#E4680B",
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            marginLeft: -20,
          }}
          onPress={() =>
            props.navigation.replace("MainNavigation", { screen: "Signin" })
          }
        />
      </DrawerContentScrollView>
    </View>
  );
}
export default CustomDrawer;
