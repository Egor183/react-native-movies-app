import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SEARCH_STACK_ROUTES } from '@src/constants/routes.constants';
import Search from '@src/screens/Search';

const Stack = createNativeStackNavigator();

const SearchStackNavigator = () => (
  <Stack.Navigator
    initialRouteName={SEARCH_STACK_ROUTES.SEARCH}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SEARCH_STACK_ROUTES.SEARCH} component={Search} />
  </Stack.Navigator>
);

export default memo(SearchStackNavigator);
