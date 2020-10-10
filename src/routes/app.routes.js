import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tarefas from '../pages/Tarefas';
import Projetos from '../pages/Projetos';



const App = createBottomTabNavigator();

const AppRoutes = () => {
  return (

    <App.Navigator>
       <App.Screen 
         name="Projetos" 
         component={Projetos}
         options={{
           tabBarIcon: () => (
             <MaterialCommunityIcons 
             name="view-dashboard" 
             color="#69b6ff" 
             size={22} 
             />
           )
         }} 
      />
      
      <App.Screen 
        name="Tarefas" 
        component={Tarefas}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons 
            name="view-dashboard" 
            color="#69b6ff" 
            size={22}
            />
          )
        }}  
      />
    </App.Navigator>
   
  )
}



export default AppRoutes;