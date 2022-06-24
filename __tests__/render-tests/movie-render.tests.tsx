import React from 'react';
import {
  MOVIES_STACK_ROUTES,
  NAVIGATORS,
} from '@src/constants/routes.constants';
import { navigate } from '@src/modules/Navigation/actions';
import { FlatList } from 'react-native';
import renderer from 'react-test-renderer';
import { MovieType, PosterType } from '@src/types/movies.types';
import FoundMovie from '@src/screens/Search/components/FoundMovie';
import MoviePoster from '@src/components/MoviePoster';
import { MOCK_MOVIES_LIST } from '../../__mocks__/mock-data';

describe('Movies renders test', () => {
  it('Should render found movies list', () => {
    type RenderItemProps = {
      item: MovieType;
    };

    const renderItem = ({ item }: RenderItemProps) => {
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
    };

    const foundMovies = renderer
      .create(
        <FlatList
          renderItem={renderItem}
          keyExtractor={item => item.id}
          data={MOCK_MOVIES_LIST}
          showsVerticalScrollIndicator={false}
        />,
      )
      .toJSON();

    expect(foundMovies).toMatchSnapshot();
  });

  it('Should render posters list', () => {
    type RenderItemProps = { item: PosterType };

    const renderItem = ({ item }: RenderItemProps) => {
      const handlePress = () => {
        navigate(MOVIES_STACK_ROUTES.MOVIE_DETAILS, { id: item.id });
      };

      return <MoviePoster onPress={handlePress} uri={item.poster} gap={10} />;
    };

    const foundMovies = renderer
      .create(
        <FlatList
          renderItem={renderItem}
          keyExtractor={item => item.id}
          data={MOCK_MOVIES_LIST}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
        />,
      )
      .toJSON();

    expect(foundMovies).toMatchSnapshot();
  });
});
