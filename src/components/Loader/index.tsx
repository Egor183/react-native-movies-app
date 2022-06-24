import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import loader from '@src/assets/animations/loader.json';

import styles from './styles';

const Loader = () => (
  <View style={styles.container}>
    <LottieView source={loader} autoPlay loop style={styles.lottieView} />
  </View>
);

export default Loader;
