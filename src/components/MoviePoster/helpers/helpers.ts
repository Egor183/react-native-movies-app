import { moderateScale } from 'react-native-size-matters';
import { DEFAULT_FONT_SIZE, DEFAULT_POSTER_WIDTH } from '../constants/cnstants';

export const calculateFontSize = (width: number) =>
  moderateScale((DEFAULT_FONT_SIZE * width) / DEFAULT_POSTER_WIDTH);

export const calculatePosterSizes = (width: number) => ({
  width: moderateScale(width),
  height: moderateScale(width * 2),
});
