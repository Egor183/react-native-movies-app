import { ScaledSheet } from 'react-native-size-matters';
import {
  setModerateScale,
  setModerateVerticalScale,
} from '@src/services/scale.services';
import { COLORS } from '@src/constants/colors.constants';

export default ScaledSheet.create({
  screenName: {
    fontSize: setModerateScale(22),
    fontFamily: 'Jost-Semibold',
    color: COLORS.BLACK_COLOR,
    alignSelf: 'flex-start',
    maxWidth: setModerateScale(210),
    marginBottom: setModerateScale(10),
  },

  background: {
    width: '100%',
    height: setModerateScale(250),
    backgroundColor: COLORS.GRAY_COLOR,
  },

  informationContainer: {
    marginTop: setModerateScale(-80),
    marginHorizontal: setModerateScale(24),
    flex: 1,
  },

  baseInformationContainer: {
    flexDirection: 'row',
  },

  titleAndRatingContainer: {
    marginLeft: setModerateScale(20),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  descriptionText: {
    fontSize: setModerateScale(15),
    fontFamily: 'Asap-Regular',
    letterSpacing: setModerateScale(0.5),
    marginBottom: setModerateVerticalScale(20),
  },

  textContainer: {
    marginTop: setModerateVerticalScale(10),
  },
});
