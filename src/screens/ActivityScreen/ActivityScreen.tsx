import React from 'react';
import { Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityScreenProps } from './types';
import FastImage from '@d11/react-native-fast-image';
import { IMAGE } from '../../constants';
import { ActivityText } from './constants';
import ActivityLoader from './ActivityLoader';
import { formatTime } from '../../utils/formatTime';

export const ActivityScreen = ({ rides, loading }: ActivityScreenProps) => {
  if (loading) {
    return <ActivityLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{ActivityText.title}</Text>
      <FlashList
        data={rides}
        renderItem={renderItem}
        estimatedItemSize={80}
        scrollEnabled
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </SafeAreaView>
  );
};

const ItemSeparatorComponent = () => <View style={styles.separator} />;

const renderItem = ({ item }: { item: any }) => (
  <View style={styles.cardContainer}>
    <View style={styles.row}>
      <View style={styles.vehicleIconContainer}>
        <FastImage
          source={
            item.vehicleType?.toLowerCase() === 'auto'
              ? IMAGE.autoImage
              : IMAGE.carImage
          }
          style={styles.vehicleIcon}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.drop?.address}
        </Text>
        <Text style={styles.cardDate}>{formatTime(item.timestamp)}</Text>
        <Text style={styles.cardFare}>
          ₹{item.fare === null ? '100' : item.fare}
        </Text>
      </View>
    </View>
  </View>
);
