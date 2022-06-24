import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '@src/constants/colors.constants';
import { setModerateScale } from '@src/services/scale.services';

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.MAIN_BACKGROUND_COLOR,
  },

  lottieView: {
    width: setModerateScale(150),
  },
});
