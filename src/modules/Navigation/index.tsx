import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ErrorModal from '@src/components/ErrorModal';
import { MODAL_ROUTES, NAVIGATORS } from '@src/constants/routes.constants';
import BottomTabNavigator from './BottomTabs';
import { navigationRef } from './actions';

const RootStack = createNativeStackNavigator();

const Navigator = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Group>
          <RootStack.Screen
            name={NAVIGATORS.BOTTOM_TAB_NAVIGATOR}
            component={BottomTabNavigator}
          />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: 'modal',
            gestureEnabled: true,
          }}>
          <RootStack.Screen name={MODAL_ROUTES.ERROR} component={ErrorModal} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default memo(Navigator);
