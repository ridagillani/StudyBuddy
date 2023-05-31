import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Leaderboard from "../screens/Leaderboard";
import Home from "../screens/Home";
import Help from "../screens/Help";
import Challenges from "../screens/Challenges";
import { Dimensions, Image } from "react-native";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ChildDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: windowWidth * 0.65,
        },
        drawerLabelStyle: {
          color: "#E4680B",
          fontFamily: "Poppins-Regular",
          fontSize: 16,
          marginLeft: -20,
        },
        drawerPosition: "right",
        drawerActiveBackgroundColor: "rgba(228, 104, 11, 0.4)",
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../assets/icons/leader.png")}
              style={{
                width: windowWidth * 0.055,
                height: windowHeight * 0.026,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../assets/icons/help.png")}
              style={{
                width: windowWidth * 0.055,
                height: windowHeight * 0.026,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Challenges"
        component={Challenges}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
};
export default ChildDrawerNavigation;
