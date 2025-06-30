import { View, Text, Image } from 'react-native';
import React, { memo, useMemo } from 'react';
import { HomeScreenText } from './constants';
import { styles } from './styles';
import { IMAGE } from '../../constants/image';
import { CustomButton } from '../../components/CustomButton';
import { FlashList } from '@shopify/flash-list';
import { HomeAdsProps } from './types';

export const HomeAds = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        homeAdsTitle: HomeScreenText.homeCarAdsTitle,
        homeAdsImage: IMAGE.carImage,
        homeAdsButton: HomeScreenText.homeCarAdsButton,
      },
      {
        id: 2,
        homeAdsTitle: HomeScreenText.homeAutoAdsTitle,
        homeAdsImage: IMAGE.autoImage,
        homeAdsButton: HomeScreenText.homeAutoAdsButton,
      },
    ],
    [],
  );
  return (
    <View style={styles.homeAdsContentContainer}>
      <FlashList
        data={data}
        renderItem={({ item }) => <HomeAdsItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        keyExtractor={(_, index) => index.toString()}
        removeClippedSubviews
        estimatedItemSize={200}
        snapToInterval={300}
        decelerationRate="fast"
        snapToAlignment="start"
        bounces={false}
        role="list"
        accessibilityRole="list"
        accessibilityLabel="Home Ads"
        accessibilityHint="Scroll to view Home Ads"
      />
    </View>
  );
};

const HomeAdsItem = memo(({ item }: { item: HomeAdsProps }) => {
  return (
    <View style={[styles.homeAdsItemContainer, item.homeAdsStyle]}>
      <View style={styles.homeAdsTextContainer}>
        <Text style={styles.homeAdsText} numberOfLines={2}>
          {item.homeAdsTitle}
        </Text>
        <CustomButton
          buttonText={item.homeAdsButton}
          buttonStyle={styles.homeAdsButton}
          buttonTextStyle={styles.homeAdsButtonText}
          onPress={() => {}}
        />
      </View>
      <Image source={item.homeAdsImage as any} style={styles.homeAdsImage} />
    </View>
  );
});
