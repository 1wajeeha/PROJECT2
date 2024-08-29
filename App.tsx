import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import {View,Text} from 'react-native';

import BottomTabNavigator from './src/assets/navigation/BottomTabNavigator';
const Stack =createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomNavigation'>
        <Stack.Screen
        name='BottomNavigation'
        component={BottomTabNavigator}
        options={{headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;