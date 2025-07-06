import React from 'react';
import { CustomLoader } from '../../components/CustomLoader';
import { Rect } from 'react-content-loader/native';
import { View } from 'react-native';
import { styles } from './styles';

export default function ServiceLoader() {
  return (
    <View style={styles.loaderContainer}>
      <CustomLoader>
        <Rect x="0" y="0" rx="12" ry="12" width="100%" height="80" />
        <Rect x="0" y="100" rx="12" ry="12" width="100%" height="120" />
        <Rect x="200" y="220" rx="12" ry="12" width="100%" height="120" />
        <Rect x="400" y="340" rx="12" ry="12" width="100%" height="120" />
        {/* <Rect x="80" y="80" rx="12" ry="12" width="100%" height="80" /> */}
        {/* <Rect x="120" y="120" rx="12" ry="12" width="100%" height="80" /> */}
        {/* <Rect x="160" y="160" rx="12" ry="12" width="100%" height="80" /> */}
      </CustomLoader>
    </View>
  );
}
