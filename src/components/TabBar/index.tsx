import React, { memo } from 'react';
import { View } from 'react-native';
import MIcon from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';
import {
  MOVIES_STACK_ROUTES,
  NAVIGATORS,
  SEARCH_STACK_ROUTES,
  TABS_NAMES,
} from '@src/constants/routes.constants';
import { COLORS } from '@src/constants/colors.constants';
import { navigate } from '@src/modules/Navigation/actions';
import Tab from './components/Tab';

import styles from './styles';

const TABS = [
  {
    id: 1,
    Icon: (
      <MIcon
        name="md-home-sharp"
        size={moderateScale(30)}
        color={COLORS.BLACK_COLOR}
      />
    ),
    name: TABS_NAMES.HOME,
    onPress: () =>
      navigate(NAVIGATORS.MOVIES_NAVIGATOR, {
        screen: MOVIES_STACK_ROUTES.MOVIES,
      }),
  },
  {
    id: 2,
    Icon: (
      <MIcon
        name="md-search-sharp"
        size={moderateScale(30)}
        color={COLORS.BLACK_COLOR}
        style={styles.searchIconStyles}
      />
    ),
    name: TABS_NAMES.SEARCH,
    onPress: () =>
      navigate(NAVIGATORS.SEARCH_NAVIGATOR, {
        screen: SEARCH_STACK_ROUTES.SEARCH,
      }),
  },
];

const TabBar = () => (
  <View style={styles.tabBarContainer}>
    {TABS.map(({ id, Icon, name, onPress }) => (
      <Tab key={id} Icon={Icon} name={name} onPress={onPress} />
    ))}
  </View>
);

export default memo(TabBar);
