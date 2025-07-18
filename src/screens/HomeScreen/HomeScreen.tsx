import { View, Image, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { IMAGE } from '../../constants/image';
import { styles } from './styles';
import { CustomIcon } from '../../components/CustomIcon';
import { Colors } from '../../constants';
import { HomeScreenText } from './constants';
import { Text } from 'react-native';
import { HomeScreenProps, SearchHistoryProps } from './types';
import { CustomHeader } from '../../components/CustomHeader';
import { PromoCard } from './PromoCard';
import { HomeAds } from './HomeAds';

// Home Screen Presentational Component
const HomeScreen = ({
  searchHistory,
  handleWhereTo,
  handleSeeAll,
  promoCardData,
  homeAdsData,
}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE.homeScreenLogo} style={styles.logoImage} />
      <View style={styles.mainContainer}>
        {/* Where To Input */}
        <WhereToInput handleWhereTo={handleWhereTo} />
        {/* Search History */}
        <SearchHistory searchHistory={searchHistory} />
        <Suggestions
          handleSeeAll={handleSeeAll}
          promoCardData={promoCardData}
        />
        <HomeAds homeAdsData={homeAdsData!} />
      </View>
    </View>
  );
};

// Where To Input
const WhereToInput = memo(({ handleWhereTo }: HomeScreenProps) => {
  return (
    <TouchableOpacity style={styles.whereToContainer} onPress={handleWhereTo}>
      <CustomIcon
        name="search"
        size={24}
        color={Colors.searchIcon}
        iconFamily="FontAwesome"
      />
      <Text style={styles.whereToInputText}>
        {HomeScreenText.whereToInputPlaceholder}
      </Text>
      <View style={styles.line} />

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <CustomIcon
          name="calendar-clear"
          size={18}
          color={Colors.searchIcon}
          iconFamily="Ionicons"
        />
        <Text style={styles.calendarText}>{HomeScreenText.later}</Text>
      </View>
    </TouchableOpacity>
  );
});

// Search History
const SearchHistory = memo(({ searchHistory }: SearchHistoryProps) => {
  return (
    <TouchableOpacity style={styles.searchHistoryContainer}>
      <View style={styles.iconContainer}>
        <CustomIcon
          name="timer-outline"
          size={24}
          color={Colors.searchIcon}
          iconFamily="Ionicons"
        />
      </View>
      <View>
        <Text style={styles.searchHistoryText}>{searchHistory}</Text>
        <Text style={styles.stateText}>{HomeScreenText.state}</Text>
      </View>
    </TouchableOpacity>
  );
});

// Suggestions
const Suggestions = memo(
  ({ handleSeeAll, promoCardData }: SearchHistoryProps) => {
    return (
      <View style={styles.suggestionsContainer}>
        <CustomHeader
          leftText={HomeScreenText.suggestions}
          rightText={HomeScreenText.seeAll}
          leftPress={() => {}}
          rightPress={handleSeeAll}
          leftTextStyle={styles.leftTextStyle}
          rightTextStyle={styles.rightTextStyle}
        />
        <PromoCard promoCardData={promoCardData!} />
      </View>
    );
  },
);
export default HomeScreen;
