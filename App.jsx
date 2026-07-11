import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}