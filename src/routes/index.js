import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import  AppRoutes from '../routes/app.routes';
import  AuthRoutes from '../routes/auth.routes';

import { useAuth } from '../hooks/auth';

const Stack = createStackNavigator();

const RootNavigator = () => {
    const { user } = useAuth();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>      
        <Stack.Screen name="Root" component={ user ? AppRoutes : AuthRoutes} />
        </Stack.Navigator>
    )
}

export default RootNavigator;