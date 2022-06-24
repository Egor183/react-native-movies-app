import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { PostersSliderType } from '@src/types/movies.types';
import { useRenderItem } from './hooks/useRenderItem.hook';

import styles from './styles';

type Props = PostersSliderType;

const PostersSlider: React.FC<Props> = ({ posters, genre }) => {
  const renderItem = useRenderItem();

  return (
    <View style={styles.movieSliderContainer}>
      <Text style={styles.genreName}>{genre}</Text>
      <FlatList
        style={styles.flatList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        data={posters}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
      />
    </View>
  );
};

export default memo(PostersSlider);
