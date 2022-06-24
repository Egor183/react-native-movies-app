import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '@src/constants/colors.constants';
import { setModerateScale } from '@src/services/scale.services';
import { setModerateVerticalScale } from '@src/services/scale.services';

export default ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.MODAL_BACKGROUND_COLOR,
  },

  description: {
    fontFamily: 'Jost-Regular',
    fontSize: setModerateScale(20),
    color: 'white',
    marginTop: setModerateVerticalScale(30),
    textAlign: 'center',
  },

  button: {
    backgroundColor: COLORS.GREEN_COLOR,
    width: setModerateScale(60),
    height: setModerateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: setModerateScale(30),
    marginTop: setModerateVerticalScale(30),
  },

  buttonText: {
    fontFamily: 'Jost-Semibold',
    fontSize: setModerateScale(16),
  },
});
