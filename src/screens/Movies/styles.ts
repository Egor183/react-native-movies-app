import { ScaledSheet } from 'react-native-size-matters';
import { setModerateScale } from '@src/services/scale.services';

export default ScaledSheet.create({
  screenName: {
    marginTop: setModerateScale(10),
    fontSize: setModerateScale(30),
    letterSpacing: setModerateScale(1),
    textAlign: 'center',
    fontFamily: 'Jost-Semibold',
    fontWeight: '400',
    lineHeight: setModerateScale(35),
  },

  flatList: {
    marginTop: setModerateScale(40),
    marginLeft: setModerateScale(12),
  },
});
