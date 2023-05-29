import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profiles from "../screens/Profiles";
import ChildProgress from "../screens/childProgress";
import Settingss from "../screens/Settingss";
import ChildStack from "./ChildStack";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="ChildProgress" component={ChildProgress} />
      <Drawer.Screen name="Profile" component={Profiles} />
      <Drawer.Screen name="Settings" component={Settingss} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
