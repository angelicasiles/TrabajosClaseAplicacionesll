/* eslint-disable prettier/prettier */
/* call react libraries */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* custom modules */
import Home from './src/views/home';
import Details from './src/views/details';
import About from './src/views/about';
import MyNavigator from './src/components/MyNavigator';

const Stack = createNativeStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerBackVisible: false }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: props => (
                            <MyNavigator navigation={undefined} {...props} />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerTitle: props => (
                            <MyNavigator navigation={undefined} {...props} />
                        ),
                    }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        headerTitle: props => (
                            <MyNavigator navigation={undefined} {...props} />
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;