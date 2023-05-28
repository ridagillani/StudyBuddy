import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Identify from "../screens/Identify";
import Match from "../screens/Match";
import Result from "../screens/Result";
import GameOver from "../screens/GameOver";
import Answers from "../screens/Answers";
import Congratulation from "../screens/Congratulation";
import MCQ from "../screens/MCQ";
import Help1 from "../screens/Help";
import Help4 from "../screens/Help4";
import Help5 from "../screens/Help5";

const Stack = createNativeStackNavigator();

const GameStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Identify" component={Identify} />
      <Stack.Screen name="MCQ" component={MCQ} />
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Congratulation" component={Congratulation} />
      <Stack.Screen name="GameOver" component={GameOver} />
      <Stack.Screen name="Answers" component={Answers} /> */}
      <Stack.Screen name="Help1" component={Help1} />
      <Stack.Screen name="Help4" component={Help4} />
      <Stack.Screen name="Help5" component={Help5} />
    </Stack.Navigator>
  );
};

export default GameStack;
