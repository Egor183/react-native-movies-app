import React, { memo } from 'react';
import { Image, Pressable, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { DEFAULT_POSTER_WIDTH } from './constants/cnstants';
import { calculateFontSize, calculatePosterSizes } from './helpers/helpers';

import styles from './styles';

type Props = {
  onPress?: () => void | null;
  uri?: string;
  gap?: number;
  width?: number;
};

const MoviePoster: React.FC<Props> = ({
  onPress = null,
  uri,
  gap = 0,
  width = DEFAULT_POSTER_WIDTH,
}) => (
  <Pressable
    style={[
      styles.movieContainer,
      {
        marginLeft: moderateScale(gap),
        ...calculatePosterSizes(width),
      },
    ]}
    onPress={onPress ? onPress : null}>
    {uri ? (
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
    ) : (
      <Text
        style={[
          styles.noImageDescription,
          { fontSize: calculateFontSize(width) },
        ]}>
        No poster...
      </Text>
    )}
  </Pressable>
);

export default memo(MoviePoster);
