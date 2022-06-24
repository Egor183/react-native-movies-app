import { ScaledSheet } from 'react-native-size-matters';
import {
  setModerateVerticalScale,
  setModerateScale,
} from '@src/services/scale.services';

export default ScaledSheet.create({
  movieContainer: {
    flexDirection: 'row',
    marginTop: setModerateVerticalScale(15),
  },

  title: {
    fontFamily: 'Jost-SemiBold',
    fontSize: setModerateScale(16),
  },

  movieInformationContainer: {
    marginLeft: setModerateScale(10),
    justifyContent: 'space-between',
  },

  baseInfo: {
    fontFamily: 'Jost-Regular',
    fontSize: setModerateScale(14),
    width: setModerateScale(220),
  },
});
