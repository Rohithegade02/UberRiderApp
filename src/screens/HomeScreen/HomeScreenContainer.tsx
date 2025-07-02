import React, { memo, useCallback, useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import { navigate } from '../../navigation/NavigationUtil';
import { STACK_ROUTES } from '../../routes';
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
  return (
    <HomeScreen
      searchHistory={searchHistory}
      handleWhereTo={handleWhereTo}
      loading={loading}
    />
  );
});
