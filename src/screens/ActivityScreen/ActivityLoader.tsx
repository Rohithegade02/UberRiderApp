import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { CustomLoader } from '../../components/CustomLoader';
import { Rect } from 'react-content-loader/native';

const ActivityLoader = () => {
  return (
    <View style={styles.loaderContainer}>
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
    </View>
  );
};

export default ActivityLoader;
