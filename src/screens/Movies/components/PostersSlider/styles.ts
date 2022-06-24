import { ScaledSheet } from 'react-native-size-matters';
import { setModerateScale } from '@src/services/scale.services';

export default ScaledSheet.create({
  movieSliderContainer: {
    marginBottom: setModerateScale(20),
  },

  flatList: {
    marginTop: setModerateScale(10),
  },

  genreName: {
    fontSize: setModerateScale(18),
    marginLeft: setModerateScale(10),
    fontFamily: 'Jost-Regular',
  },
});
