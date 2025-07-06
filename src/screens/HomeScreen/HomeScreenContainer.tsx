import React, { memo, useCallback, useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import { navigate } from '../../navigation/NavigationUtil';
import { STACK_ROUTES } from '../../routes';
import { TAB_ROUTES } from '../../routes';

// Home Screen Container Component
export const HomeScreenContainer = memo(() => {
  const [searchHistory, setSearchHistory] = useState<string>('Hubballi');

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const handleWhereTo = useCallback(() => {
    navigate(STACK_ROUTES.BookingScreen);
  }, []);
  const handleSeeAll = useCallback(() => {
    navigate(STACK_ROUTES.TabNavigator, { screen: TAB_ROUTES.Service });
  }, []);
  return (
    <HomeScreen
      searchHistory={searchHistory}
      handleWhereTo={handleWhereTo}
      loading={loading}
      handleSeeAll={handleSeeAll}
    />
  );
});
