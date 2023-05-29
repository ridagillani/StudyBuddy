import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profiles from "../screens/Profiles";
import ChildProgress from "../screens/childProgress";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Child" component={ChildProgress} />
      <Drawer.Screen name="Profiles" component={Profiles} />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
