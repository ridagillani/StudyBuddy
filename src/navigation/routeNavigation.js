import React from "react";
import StackNavigation from "./stackNavigation";
import DrawerNavigation from "./drawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameStack from "./GameStack";
import MainNavigation from "./MainNavigation";
import ParentNavigation from "./ParentNavigation";
import ChildDrawerNavigation from "./ChildNavigation";
import Challenges from "../screens/Challenges";

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Challenges" component={Challenges} />
        {/* <Stack.Screen name="MainNavigation" component={MainNavigation} />
        <Stack.Screen name="Main" component={StackNavigation} />
        <Stack.Screen name="Game" component={GameStack} />
        <Stack.Screen name="Parent" component={ParentNavigation} />
        <Stack.Screen name="ChildN" component={ChildDrawerNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
