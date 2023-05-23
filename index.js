/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from './src/screens/SplashScreen';

AppRegistry.registerComponent(appName, () => SplashScreen);
