import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../views/HomeView";
import welcomeView from "../views/welcomeView";
import LoginView from "../views/LoginView";
import SignUpView from "../views/SignUpView";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){

    return(
<NavigationContainer>

    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeView} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={welcomeView} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginView} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpView} />
    </Stack.Navigator>
</NavigationContainer>


    )
}