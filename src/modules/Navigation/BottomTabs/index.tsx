import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATORS } from '@src/constants/routes.constants';
import { useTabBar } from './hooks/useTabBar.hook';
import MoviesStackNavigator from '../Movies';
import Search from '../Search';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabBar = useTabBar();

  return (
    <Tab.Navigator
      tabBar={tabBar}
      initialRouteName={NAVIGATORS.MOVIES_NAVIGATOR}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={NAVIGATORS.MOVIES_NAVIGATOR}
        component={MoviesStackNavigator}
      />
      <Tab.Screen name={NAVIGATORS.SEARCH_NAVIGATOR} component={Search} />
    </Tab.Navigator>
  );
};

export default memo(BottomTabNavigator);
