import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigation from "./MainNavigation";
import ParentNavigation from "./ParentNavigation";
import ChildDrawerNavigation from "./ChildNavigation";
import Identify from "../screens/Identify";
import Match from "../screens/Match";
import Result from "../screens/Result";
import GameOver from "../screens/GameOver";
import Answers from "../screens/Answers";
import Congratulation from "../screens/Congratulation";
import MCQ from "../screens/MCQ";
import Help4 from "../screens/Help4";
import Help5 from "../screens/Help5";
import AddChild from "../screens/AddChild";
import EditChild from "../screens/EditChild";
import ChildAdded from "../screens/ChildAdded";
import DrawerNavigation from "./drawerNavigation";

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
        <Stack.Screen name="Parent" component={ParentNavigation} />
        <Stack.Screen name="ChildN" component={ChildDrawerNavigation} />
        <Stack.Screen name="Identify" component={Identify} />
        <Stack.Screen name="MCQ" component={MCQ} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Congratulation" component={Congratulation} />
        <Stack.Screen name="GameOver" component={GameOver} />
        <Stack.Screen name="Answers" component={Answers} />
        <Stack.Screen name="Help4" component={Help4} />
        <Stack.Screen name="Help5" component={Help5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
