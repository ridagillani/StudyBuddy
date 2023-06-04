import React from "react";
import { Dimensions, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profiles from "../screens/Profiles";
import ChildProgress from "../screens/childProgress";
import Settingss from "../screens/Settingss";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DrawerNavigation = () => {
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
      }}
    >
      <Drawer.Screen
        name="ChildProgress"
        component={ChildProgress}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Profiles"
        component={Profiles}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../assets/icons/user.png")}
              style={{
                width: windowWidth * 0.055,
                height: windowHeight * 0.026,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settingss}
        options={{
          drawerIcon: () => (
            <Image
              source={require("../assets/icons/settings.png")}
              style={{
                width: windowWidth * 0.055,
                height: windowHeight * 0.029,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
