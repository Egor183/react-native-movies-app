import React, { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import MoviePoster from '@src/components/MoviePoster';

import styles from './styles';

type Props = {
  uri: string;
  title: string;
  classification: string;
  rating: number;
  description: string;
  onPress: () => void;
};

const FoundMovie: React.FC<Props> = ({
  uri,
  title,
  classification,
  rating,
  description,
  onPress,
}) => (
  <Pressable style={styles.movieContainer} onPress={onPress}>
    <MoviePoster width={50} uri={uri} />
    <View style={styles.movieInformationContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.baseInfo}>Classification: {classification}</Text>
      <Text style={styles.baseInfo}>Rating: {rating}</Text>
      <Text numberOfLines={2} style={styles.baseInfo}>
        Description: {description}
      </Text>
    </View>
  </Pressable>
);

export default memo(FoundMovie);
