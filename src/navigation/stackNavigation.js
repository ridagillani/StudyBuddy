import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Identify from "../screens/Identify";
import WelcomeScreen from "../screens/welcomeScreen";
<<<<<<< HEAD
import ChildProgress from "../screens/childProgress";
=======
import Signin from "../screens/Signin";
>>>>>>> 6dac225c29c2a729d7d5e57c231fd79dc603b7ac

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
<<<<<<< HEAD
      {/* <Stack.Screen name="Splash" component={SplashScreen} />
=======
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Signin" component={Signin} />
>>>>>>> 6dac225c29c2a729d7d5e57c231fd79dc603b7ac
      <Stack.Screen name="Identify" component={Identify} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
      <Stack.Screen name="ChildProgress" component={ChildProgress} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
