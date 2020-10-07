import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tarefas from '../pages/Tarefas';
import Projetos from '../pages/Projetos';
import ProjetosDetalhes from '../pages/ProjetosDetalhes'


const App = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator>
      <App.Screen name="Projetos" component={Projetos} />
<<<<<<< HEAD
      <App.Screen name="ProjetosDetalhes" component={ProjetosDatalhes} />
=======
      <App.Screen name="ProjetosDetalhes" component={ProjetosDetalhes} />
>>>>>>> cc6498c92864447baf4e8313d8735f3d05c08932
      <App.Screen name="Tarefas" component={Tarefas} />
    </App.Navigator>
  )
}

export default AppRoutes;