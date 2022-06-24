import { ScaledSheet } from 'react-native-size-matters';
import { setModerateScale } from '@src/services/scale.services';

export default ScaledSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: setModerateScale(60),
    height: setModerateScale(60),
  },
});
