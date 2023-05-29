import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profiles from "../screens/Profiles";
import ChildProgress from "../screens/childProgress";
const Stack = createNativeStackNavigator();

const ChildStack = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChildProgress" component={ChildProgress} />
      <Stack.Screen name="Profiles" component={Profiles} />
    </Stack.Navigator>
  );
};

export default ChildStack;
