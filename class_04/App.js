/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({ navigation }) {
	const goDetails = () =>
			navigation.navigate('Details', {id: 12345, name: 'Morticia Addams'});
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>This is Home View</Text>
			<Button title={'Go Details'} onPress={goDetails} />
		</View>
	);
}

function Details({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>This is Details View</Text>
			<Button title={'Go Home'} onPress={() => navigation.navigate('Home')} />
		</View>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
	  <NavigationContainer>
		<Stack.Navigator
		  screenOptions={{
			headerStyle: { 
			  backgroundColor: '#F4511E',
			},
			headerTintColor: '#FFFFFF',
			headerTitleStyle: {
			  fontWeight: 'bold',
			},
		  }}>
		  <Stack.Screen name="Home" component={Home} options={{title: 'Home Screen'}}	/>
		  <Stack.Screen name="Details" component={Details} options={{title: 'Details Screen'}} />
		</Stack.Navigator>
	  </NavigationContainer>
	);
  }
  
export default App;