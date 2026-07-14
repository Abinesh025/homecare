import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Verifications from "./screens/Verifications";
import Success from "./screens/Success";
import BookingsScreen from "./screens/BookingsScreen";
import BookingDetailsScreen from "./screens/BookingDetailsScreen";
import DashboardScreen from "./screens/DashboardScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verification" component={Verifications} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Bookings" component={BookingsScreen} />
        <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}