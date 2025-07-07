import { View, Text, Image } from 'react-native';
import React, { memo } from 'react';
import { styles } from './styles';
import { CustomButton } from '../../components/CustomButton';
import { FlashList } from '@shopify/flash-list';
import { HomeAdsItemProps, HomeAdsProps } from './types';

// Home Ads Component
export const HomeAds = ({ homeAdsData }: HomeAdsItemProps) => {
  if (!homeAdsData) {
    return null;
  }

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <View style={styles.homeAdsContentContainer}>
      <FlashList
        data={homeAdsData}
        renderItem={({ item }) => <HomeAdsItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
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

// Home Ads Item Component
const HomeAdsItem = memo(({ item }: { item: HomeAdsProps }) => {
  return (
    <View style={[styles.homeAdsItemContainer, item.homeAdsStyle]}>
      <View style={styles.homeAdsTextContainer}>
        <Text style={styles.homeAdsText} numberOfLines={2}>
          {item.homeAdsTitle}
        </Text>
        <CustomButton
          buttonText={item.homeAdsButton!}
          buttonStyle={styles.homeAdsButton}
          buttonTextStyle={styles.homeAdsButtonText}
          onPress={() => {}}
        />
      </View>
      <Image source={item.homeAdsImage as any} style={styles.homeAdsImage} />
    </View>
  );
});
