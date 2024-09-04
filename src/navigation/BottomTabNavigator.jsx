import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


import { Home, Profile, Search } from '../../screens';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true, 
  headerShown: false, 
  tabBarStyle: {
    position: 'absolute', 
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
};

const BottomTabNavigation = () => {
  return (

      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          // options={{
          //   tabBarIcon: ({ focused }) => (
          //     <Icons
          //       name={focused ? 'home' : 'home-outline'}
          //       size={24}
          //       color={focused ? 'red' : 'yellow'}
          //     />
          //   ),
          // }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          // options={{
          //   tabBarIcon: ({ focused }) => (
          //     <Icons
          //       name={focused ? 'search' : 'search-outline'} // Changed icon name to 'search' and 'search-outline'
          //       size={24}
          //       color={focused ? 'red' : 'yellow'}
          //     />
          //   ),
          // }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          screenOptions={{
              tabBarIcon: ({ focused }) => (
              <Icon name="rocket" size={30} color="pink" />
              // <Feather
              //   // name={focused ? 'person' : 'person-outline'} // Added Profile screen with icon 'person'
              //   size={24}
              //   color={focused ? 'red' : 'yellow'}
              //   name="home" 
              // />
            ),
          }}
          // options={{
          //   tabBarIcon: ({ focused }) => (
          //     <Icon name="rocket" size={30} color="#900" />
          //     // <Feather
          //     //   // name={focused ? 'person' : 'person-outline'} // Added Profile screen with icon 'person'
          //     //   size={24}
          //     //   color={focused ? 'red' : 'yellow'}
          //     //   name="home" 
          //     // />
          //   ),
          // }}
        />
      </Tab.Navigator>
  );
};

export default BottomTabNavigation;
