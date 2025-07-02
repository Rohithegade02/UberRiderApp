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
import { CustomLoader } from '../../components/CustomLoader';
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native';

// Home Screen Presentational Component
const HomeScreen = ({
  searchHistory,
  handleWhereTo,
  loading,
}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE.homeScreenLogo} style={styles.logoImage} />
      <View style={styles.mainContainer}>
        {/* Where To Input */}
        <WhereToInput handleWhereTo={handleWhereTo} loading={loading} />
        {/* Search History */}
        <SearchHistory searchHistory={searchHistory} loading={loading} />
        <Suggestions loading={loading} />
        <HomeAds loading={loading} />
      </View>
    </View>
  );
};

// Where To Input
const WhereToInput = memo(({ handleWhereTo, loading }: HomeScreenProps) => {
  if (loading) {
    return (
      <CustomLoader>
        <Rect x="0" y="0" rx="36" ry="36" width="100%" height="60" />
      </CustomLoader>
    );
  }
  return (
    <TouchableOpacity style={styles.whereToContainer} onPress={handleWhereTo}>
      {/* TODO:icon not working */}
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
const SearchHistory = memo(({ searchHistory, loading }: SearchHistoryProps) => {
  if (loading) {
    return (
      <CustomLoader>
        <Rect x="0" y="0" rx="12" ry="12" width="100%" height="80" />
      </CustomLoader>
    );
  }
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
const Suggestions = memo(({ loading }: SearchHistoryProps) => {
  if (loading) {
    return (
      <CustomLoader>
        <Rect x="0" y="0" rx="4" ry="4" width="50" height="10" />
        <Rect x="280" y="0" rx="4" ry="4" width="70" height="10" />
        <Rect x="0" y="20" rx="4" ry="4" width="45%" height="70" />
        <Rect x="180" y="20" rx="4" ry="4" width="45%" height="70" />
      </CustomLoader>
    );
  }
  return (
    <View style={styles.suggestionsContainer}>
      <CustomHeader
        leftText={HomeScreenText.suggestions}
        rightText={HomeScreenText.seeAll}
        // navigate to vehicle suggestions screen
        leftPress={() => {}}
        rightPress={() => {}}
        leftTextStyle={styles.leftTextStyle}
        rightTextStyle={styles.rightTextStyle}
      />
      <PromoCard />
    </View>
  );
});
export default HomeScreen;
