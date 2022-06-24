import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { Text, View, Pressable } from 'react-native';
import MIcon from 'react-native-vector-icons/AntDesign';
import { NEW_LINE } from '@src/constants/global.constants';
import { COLORS } from '@src/constants/colors.constants';
import { handleGoToHomeScreen } from './helpers/helpers';

import styles from './styles';

const ErrorModal = () => (
  <View style={styles.container}>
    <MIcon
      name="warning"
      size={moderateScale(80)}
      color={COLORS.WARNING_COLOR}
    />
    <Text style={styles.description}>
      Something went wrong...{NEW_LINE}
      Please, try later again.
    </Text>
    <Pressable style={styles.button} onPress={handleGoToHomeScreen}>
      <Text style={styles.buttonText}>OK</Text>
    </Pressable>
  </View>
);

export default ErrorModal;
