import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Auth = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Auth.Navigator screenOptions={{ headerShown: false }}>
        <Auth.Screen name="Cadastro" component={Cadastro} />
        <Auth.Screen name="Login" component={Login} />
        </Auth.Navigator>
    )
}

export default AuthRoutes;