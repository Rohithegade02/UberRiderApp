import React, { memo, useCallback, useMemo, useState } from 'react';
import HomeScreen from './HomeScreen';
import { navigate } from '../../navigation/NavigationUtil';
import { STACK_ROUTES } from '../../routes';
import { TAB_ROUTES } from '../../routes';
import { IMAGE } from '../../constants';
import { HomeScreenText } from './constants';

// Home Screen Container Component
export const HomeScreenContainer = memo(() => {
  const [searchHistory, setSearchHistory] = useState<string>('Hubballi');

  // Handle Where To
  const handleWhereTo = useCallback(() => {
    navigate(STACK_ROUTES.BookingScreen);
  }, []);

  // Handle See All
  const handleSeeAll = useCallback(() => {
    navigate(STACK_ROUTES.TabNavigator, { screen: TAB_ROUTES.Service });
  }, []);

  // Promo Card Data
  const promoCardData = useMemo(() => {
    return [
      {
        title: HomeScreenText.ride,
        image: IMAGE.carImage,
        promo: true,
      },
      {
        title: HomeScreenText.auto,
        image: IMAGE.autoImage,
        promo: false,
      },
    ];
  }, []);

  const homeAdsData = useMemo(
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
    <HomeScreen
      searchHistory={searchHistory}
      handleWhereTo={handleWhereTo}
      handleSeeAll={handleSeeAll}
      promoCardData={promoCardData}
      homeAdsData={homeAdsData}
    />
  );
});
