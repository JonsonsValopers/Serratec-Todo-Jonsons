import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tarefas from '../pages/Tarefas'


const App = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator>
      <App.Screen name="Tarefas" component={Tarefas} />
    </App.Navigator>
  )
}

export default AppRoutes;