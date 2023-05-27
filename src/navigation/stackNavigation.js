import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Identify from "../screens/Identify";
import WelcomeScreen from "../screens/welcomeScreen";
import ChildProgress from "../screens/childProgress";
import Signin from "../screens/Signin";
import Settingss from "../screens/Settingss";
import AddChild from "../screens/AddChild";
import EditChild from "../screens/EditChild";
import Profiles from "../screens/Profiles";
import ChildAdded from "../screens/ChildAdded";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import Match from "../screens/Match";
import Result from "../screens/Result";
import Notifications from "../screens/Notifications";

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
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Identify" component={Identify} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="ChildProgress" component={ChildProgress} />
      <Stack.Screen name="Settings" component={Settingss} />
      <Stack.Screen name="AddChild" component={AddChild} />
      <Stack.Screen name="EditChild" component={EditChild} />
      <Stack.Screen name="Profiles" component={Profiles} />
      <Stack.Screen name="ChildAdded" component={ChildAdded} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
