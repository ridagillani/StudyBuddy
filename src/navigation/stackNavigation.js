import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Identify from "../screens/Identify";
import WelcomeScreen from "../screens/welcomeScreen";
import ChildProgress from "../screens/childProgress";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Identify" component={Identify} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
      <Stack.Screen name="ChildProgress" component={ChildProgress} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
