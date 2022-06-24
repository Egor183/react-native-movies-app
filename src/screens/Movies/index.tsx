import React, { memo } from 'react';
import { FlatList, Text } from 'react-native';
import { EDGES, NEW_LINE } from '@src/constants/global.constants';
import MainContainer from '@src/components/MainContainer';
import Loader from '@src/components/Loader';
import NoResults from '@src/components/NoResults';
import { useAppSelector } from '@src/hooks/useAppSelector.hook';
import { selectLoadingState } from '@src/redux/selectors/loading.selectors';
import { useFetchMovies } from './hooks/useFetchMovies.hook';
import { useRenderItem } from './hooks/useRenderItem.hook';

import styles from './styles';

const Movies = () => {
  const postersSliderData = useFetchMovies();
  const renderItem = useRenderItem();
  const isLoading = useAppSelector(selectLoadingState);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainContainer edges={[EDGES.LEFT, EDGES.RIGHT, EDGES.TOP]}>
      <Text style={styles.screenName}>WOOKIE{NEW_LINE}MOVIES</Text>
      {postersSliderData.length ? (
        <FlatList
          style={styles.flatList}
          renderItem={renderItem}
          keyExtractor={([genre]) => genre}
          data={postersSliderData}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <NoResults description="No results..." />
      )}
    </MainContainer>
  );
};

export default memo(Movies);
