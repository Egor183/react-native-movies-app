import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '@src/constants/colors.constants';

export default ScaledSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BACKGROUND_COLOR,
  },
});
