import React, { memo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import { moderateScale } from 'react-native-size-matters';
import { RouteProp } from '@react-navigation/native';
import star from '@src/assets/images/rating/star.png';
import MainContainer from '@src/components/MainContainer';
import MoviePoster from '@src/components/MoviePoster';
import NoResults from '@src/components/NoResults';
import { COLORS } from '@src/constants/colors.constants';
import { NEW_PARAGRAPH } from '@src/constants/global.constants';
import { useSelectMovie } from './hooks/useSelectMovie.hook';

import styles from './styles';

type Props = {
  route: RouteProp<{ params: { id: string } }, 'params'>;
};

const MovieDetails: React.FC<Props> = ({ route }) => {
  const id = route.params.id;
  const movie = useSelectMovie(id);

  if (!movie) {
    return <NoResults description="The movie is not found..." />;
  }

  const {
    backdrop,
    imdb_rating,
    title,
    released_on,
    length,
    cast,
    overview,
    poster,
  } = movie;

  return (
    <MainContainer>
      <Image source={{ uri: backdrop }} style={styles.background} />
      <View style={styles.informationContainer}>
        <View style={styles.baseInformationContainer}>
          <MoviePoster uri={poster} />
          <View style={styles.titleAndRatingContainer}>
            <Text style={styles.screenName}>{title}</Text>
            <Rating
              imageSize={moderateScale(30)}
              readonly
              type="custom"
              ratingBackgroundColor={COLORS.MAIN_BACKGROUND_COLOR}
              ratingImage={star}
              startingValue={imdb_rating / 2}
              fractions={20}
            />
          </View>
        </View>
        <ScrollView
          style={styles.textContainer}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.descriptionText}>
            year: {new Date(released_on).getFullYear()} | length: {length} |
            director: {movie.director}
            {NEW_PARAGRAPH}
            cast: {cast?.join(', ')}
            {NEW_PARAGRAPH}
            movie description: {overview}
          </Text>
        </ScrollView>
      </View>
    </MainContainer>
  );
};

export default memo(MovieDetails);
