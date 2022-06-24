import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '@src/constants/colors.constants';
import {
  setModerateVerticalScale,
  setModerateScale,
} from '@src/services/scale.services';

export default ScaledSheet.create({
  search: {
    height: setModerateVerticalScale(40),
  },

  searchContainer: {
    marginTop: setModerateVerticalScale(10),
    paddingHorizontal: setModerateScale(24),
  },

  containerStyle: {
    backgroundColor: COLORS.MAIN_BACKGROUND_COLOR,
  },

  inputContainerStyle: {
    borderRadius: setModerateScale(30),
  },

  inputStyle: {
    fontFamily: 'Jost-Regular',
  },

  flatList: {
    marginTop: setModerateScale(10),
    paddingHorizontal: setModerateScale(24),
  },
});
