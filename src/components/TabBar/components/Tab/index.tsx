import React, { memo } from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

type Props = {
  Icon: JSX.Element;
  name: string;
  onPress: () => void;
};

const Tab: React.FC<Props> = ({ Icon, name, onPress }) => {
  return (
    <Pressable style={styles.tabContainer} onPress={onPress}>
      {Icon}
      <Text>{name}</Text>
    </Pressable>
  );
};

export default memo(Tab);
