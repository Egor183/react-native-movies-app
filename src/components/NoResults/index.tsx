import React, { memo } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type Props = {
  description: string;
};

const NoResults: React.FC<Props> = ({ description }) => (
  <View style={styles.noResultsContainer}>
    <Text style={styles.noResultsDescription}>{description}</Text>
  </View>
);

export default memo(NoResults);
