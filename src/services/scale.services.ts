// Service provide scales for ScaledSheet css.

enum SCALES {
  MS = '@ms',
  MVS = '@mvs',
}

const DEFAULT_FACTOR = 0.5;

export const setScale = (scale: string, size: number, factor: number) =>
  `${size}${scale}${factor}`;

export const setModerateScale = (
  size: number,
  factor: number = DEFAULT_FACTOR,
) => setScale(SCALES.MS, size, factor);

export const setModerateVerticalScale = (
  size: number,
  factor: number = DEFAULT_FACTOR,
) => setScale(SCALES.MVS, size, factor);
