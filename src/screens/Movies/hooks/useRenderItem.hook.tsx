import React from 'react';
import PostersSlider from '../components/PostersSlider';

type RenderItemProps = {
  item: [string, { id: string; poster: string }[]];
};

export const useRenderItem =
  () =>
  ({ item: [genre, posters] }: RenderItemProps) =>
    <PostersSlider genre={genre} posters={posters} />;
