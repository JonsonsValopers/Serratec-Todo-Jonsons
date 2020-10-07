import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import  AppRoutes from '../routes/app.routes';
import  AuthRoutes from '../routes/auth.routes';

import { useAuth } from '../hooks/auth';

const Stack = createStackNavigator();

const RootNavigator = () => {
    const { data } = useAuth();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>      
        <Stack.Screen name="Root" component={ !data ? AuthRoutes:AppRoutes } />
        </Stack.Navigator>
    )
}

export default RootNavigator;