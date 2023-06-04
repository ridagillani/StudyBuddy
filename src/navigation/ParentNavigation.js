import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddChild from "../screens/AddChild";
import EditChild from "../screens/EditChild";
import DrawerNavigation from "./drawerNavigation";

const Stack = createNativeStackNavigator();

const ParentNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="AddChild" component={AddChild} />
      <Stack.Screen name="EditChild" component={EditChild} />
    </Stack.Navigator>
  );
};

export default ParentNavigation;
