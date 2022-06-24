import React, { memo, ReactNode } from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { EDGES } from '@src/constants/global.constants';

import styles from './styles';

type Props = {
  children: ReactNode;
  edges?: Edge[];
};

const MainContainer: React.FC<Props> = ({
  children,
  edges = [EDGES.LEFT, EDGES.RIGHT],
}) => (
  <SafeAreaView style={styles.mainContainer} edges={edges}>
    {children}
  </SafeAreaView>
);

export default memo(MainContainer);
