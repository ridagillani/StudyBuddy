import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Identify from "../screens/Identify";
import WelcomeScreen from "../screens/welcomeScreen";
import Signin from "../screens/Signin";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Identify" component={Identify} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
