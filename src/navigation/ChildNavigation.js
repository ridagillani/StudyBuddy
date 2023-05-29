import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Identify from "../screens/Identify";
import WelcomeScreen from "../screens/welcomeScreen";
import Leaderboard from "../screens/Leaderboard";
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
import MenuParent from "../components/MenuParent";
import DrawerNavigation from "./drawerNavigation";
import Help from "../screens/Help";

const Drawer = createDrawerNavigator();

const ChildDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerPosition: "right" }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Leaderboard" component={Leaderboard} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
};
export default ChildDrawerNavigation;
