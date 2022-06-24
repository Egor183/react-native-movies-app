import React, { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MOVIES_STACK_ROUTES } from '@src/constants/routes.constants';
import Movies from '@src/screens/Movies';
import MovieDetails from '@src/screens/MovieDetails';

const Stack = createNativeStackNavigator();

const MoviesStackNavigator = () => (
  <Stack.Navigator
    initialRouteName={MOVIES_STACK_ROUTES.MOVIES}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name={MOVIES_STACK_ROUTES.MOVIES} component={Movies} />
    <Stack.Screen
      name={MOVIES_STACK_ROUTES.MOVIE_DETAILS}
      component={MovieDetails}
    />
  </Stack.Navigator>
);

export default memo(MoviesStackNavigator);
