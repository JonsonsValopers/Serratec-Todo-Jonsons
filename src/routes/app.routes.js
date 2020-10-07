import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tarefas from '../pages/Tarefas';
import Projetos from '../pages/Projetos';
import ProjetosDatalhes from '../pages/ProjetosDetalhes'


const App = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator>
      <App.Screen name="Projetos" component={Projetos} />
      <App.Screen name="Detalhes" component={ProjetosDatalhes} />
      <App.Screen name="Tarefas" component={Tarefas} />
    </App.Navigator>
  )
}

export default AppRoutes;