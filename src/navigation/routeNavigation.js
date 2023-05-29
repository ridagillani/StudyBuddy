import React from "react";
import StackNavigation from "./stackNavigation";
import DrawerNavigation from "./drawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameStack from "./GameStack";

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={StackNavigation} />
        <Stack.Screen name="Game" component={GameStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
