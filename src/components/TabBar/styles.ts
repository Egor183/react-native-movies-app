import { ScaledSheet } from 'react-native-size-matters';
import { setModerateScale } from '@src/services/scale.services';
import { COLORS } from '@src/constants/colors.constants';

export default ScaledSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: setModerateScale(24),
    borderTopWidth: 2,
    borderTopColor: COLORS.GRAY_COLOR,
    backgroundColor: COLORS.MAIN_BACKGROUND_COLOR,
  },

  searchIconStyles: {
    transform: [{ rotate: '90deg' }],
  },
});
