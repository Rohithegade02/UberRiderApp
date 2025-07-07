import React from 'react';
import { styles } from './styles';
import { CustomLoader } from '../../components/CustomLoader';
import { Rect } from 'react-content-loader/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Account Loader
const AccountLoader = () => {
  return (
    <SafeAreaView style={styles.loaderContainer}>
      <CustomLoader height={110 * 10}>
        {[...Array(10)].map((_, i) => (
          <Rect
            key={i}
            x="0"
            y={i * 110}
            rx="4"
            ry="4"
            width="100%"
            height="100"
          />
        ))}
      </CustomLoader>
    </SafeAreaView>
  );
};

export default AccountLoader;
