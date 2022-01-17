
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AllScreen from '../screens/all';
import FavoritesScreen from '../screens/favorites';

const Tab = createMaterialTopTabNavigator();

const TabStack =() => {
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarActiveTintColor: '#10C64E',
        tabBarInactiveTintColor: '#7624C7',
        tabBarStyle: {
          backgroundColor: '#F8F8F8',
        },
        tabBarLabelStyle: {
          textAlign: 'center',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#10C64E',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="All"
        component={AllScreen}
        options={{
          tabBarLabel: 'All',
        }}  />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
        }} />
    </Tab.Navigator>
  );
}

export default TabStack;