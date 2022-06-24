import { ScaledSheet } from 'react-native-size-matters';
import { setModerateScale } from '@src/services/scale.services';
import { COLORS } from '@src/constants/colors.constants';

export default ScaledSheet.create({
  movieContainer: {
    backgroundColor: COLORS.GRAY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noImageDescription: {
    fontWeight: '600',
    padding: setModerateScale(8),
  },

  image: {
    height: '100%',
    width: '100%',
  },
});
