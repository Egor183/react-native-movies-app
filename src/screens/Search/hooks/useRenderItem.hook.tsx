import React, { useCallback } from 'react';
import {
  MOVIES_STACK_ROUTES,
  NAVIGATORS,
} from '@src/constants/routes.constants';
import { navigate } from '@src/modules/Navigation/actions';
import { MovieType } from '@src/types/movies.types';
import FoundMovie from '../components/FoundMovie';

type RenderItemProps = {
  item: MovieType;
};

export const useRenderItem = () =>
  useCallback(({ item }: RenderItemProps) => {
    const handlePress = () => {
      navigate(NAVIGATORS.MOVIES_NAVIGATOR, {
        screen: MOVIES_STACK_ROUTES.MOVIE_DETAILS,
        params: { id: item.id },
      });
    };

    return (
      <FoundMovie
        uri={item.poster}
        title={item.title}
        classification={item.classification}
        rating={item.imdb_rating}
        description={item.overview}
        onPress={handlePress}
      />
    );
  }, []);
