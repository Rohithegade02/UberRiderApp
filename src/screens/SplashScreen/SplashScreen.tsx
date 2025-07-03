import { View, Image } from 'react-native';
import React from 'react';
import { IMAGE } from '../../constants/image';
import { styles } from './styles';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE.splashScreenLogo} style={styles.logoImage} />
    </View>
  );
};
