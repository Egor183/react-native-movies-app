import React, { useCallback } from 'react';
import { PosterType } from '@src/types/movies.types';
import MoviePoster from '@src/components/MoviePoster';
import { navigate } from '@src/modules/Navigation/actions';
import { MOVIES_STACK_ROUTES } from '@src/constants/routes.constants';

type RenderItemProps = { item: PosterType };

export const useRenderItem = () => {
  return useCallback(({ item }: RenderItemProps) => {
    const handlePress = () => {
      navigate(MOVIES_STACK_ROUTES.MOVIE_DETAILS, { id: item.id });
    };

    return <MoviePoster onPress={handlePress} uri={item.poster} gap={10} />;
  }, []);
};
