import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';


const App = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator>
      
    </App.Navigator>
  )
}

export default AppRoutes;