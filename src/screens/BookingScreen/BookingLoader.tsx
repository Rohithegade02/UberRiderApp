import React from 'react';
import { styles } from './styles';
import { CustomLoader } from '../../components/CustomLoader';
import { Rect } from 'react-content-loader/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Booking Screen Loader
const BookingLoader = () => {
  return (
    <SafeAreaView style={styles.loaderContainer}>
      <CustomLoader height={140 * 2}>
        {[...Array(2)].map((_, i) => (
          <Rect
            key={i}
            x="0"
            y={i * 140}
            rx="4"
            ry="4"
            width="100%"
            height="120"
          />
        ))}
      </CustomLoader>
    </SafeAreaView>
  );
};

export default BookingLoader;
