import React, { memo } from 'react';
import { View, FlatList } from 'react-native';
import { SearchBar } from '@rneui/themed';
import MainContainer from '@src/components/MainContainer';
import Loader from '@src/components/Loader';
import NoResults from '@src/components/NoResults';
import { EDGES } from '@src/constants/global.constants';
import { selectLoadingState } from '@src/redux/selectors/loading.selectors';
import { useAppSelector } from '@src/hooks/useAppSelector.hook';
import { useFindMovies } from './hooks/useFindMovies.hook';
import { useRenderItem } from './hooks/useRenderItem.hook';

import styles from './styles';

const Search = () => {
  const { search, foundMovies, handleFindMovies } = useFindMovies();
  const renderItem = useRenderItem();
  const isLoading = useAppSelector(selectLoadingState);

  return (
    <MainContainer edges={[EDGES.LEFT, EDGES.RIGHT, EDGES.TOP]}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={handleFindMovies}
          value={search}
          style={styles.search}
          lightTheme={true}
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />
      </View>
      {isLoading ? (
        <Loader />
      ) : foundMovies.length ? (
        <FlatList
          style={styles.flatList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          data={foundMovies}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <NoResults description="No results..." />
      )}
    </MainContainer>
  );
};

export default memo(Search);
