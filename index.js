/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import SplashScreen from "./src/screens/SplashScreen";
import WelcomeScreen from "./src/screens/welcomeScreen";
import Signin from "./src/screens/Signin";

AppRegistry.registerComponent(appName, () => App);
