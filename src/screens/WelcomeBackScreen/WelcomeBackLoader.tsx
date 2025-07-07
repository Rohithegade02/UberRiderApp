import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Rect } from 'react-native-svg';
import { CustomLoader } from '../../components/CustomLoader';
import { styles } from './styles';
import { Dimensions } from 'react-native';

//Welcome Screen Loader
const WelcomeBackLoader = () => {
  const { height } = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.loaderContainer}>
      <CustomLoader height={height * 0.8}>
        <Rect x="0" y="0" rx="36" ry="36" width="100%" height="60" />
        <Rect x="0" y="90" rx="12" ry="12" width="100%" height="60" />
        <Rect x="0" y="190" rx="12" ry="12" width="100%" height="40" />
        <Rect x="0" y="250" rx="12" ry="12" width="100%" height="60" />
        <Rect x="0" y="320" rx="12" ry="12" width="100%" height="60" />
      </CustomLoader>
    </SafeAreaView>
  );
};

export default WelcomeBackLoader;
