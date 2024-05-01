import React from 'react';
import { View } from 'react-native';
import ValiUser from './src/components/users/fb_Valiusers';
import RegisterUser from './src/components/users/fb_Registeruser';
import LoginUser from './src/components/users/fb_Loginuser';
import LogoutUser from './src/components/users/fb_Logoutuser';
import WelcomeView from './src/views/welcomeView';
import HomeView from './src/views/HomeView';
import InsPicture from './src/components/collections/galeria/insPicture';
import LoginView from './src/views/LoginView';

const App = () => {
	return (
		<View>
			<InsPicture/>
		</View>
	);
};

export default App;
