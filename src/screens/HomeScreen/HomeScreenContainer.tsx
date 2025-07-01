import React, { memo, useCallback, useState } from 'react';
import HomeScreen from './HomeScreen';
import { navigate } from '../../navigation/NavigationUtil';
import { STACK_ROUTES } from '../../routes';
// Home Screen Container Component
export const HomeScreenContainer = memo(() => {
  const [searchHistory, setSearchHistory] = useState<string>('Hubballi');

  const handleWhereTo = useCallback(() => {
    navigate(STACK_ROUTES.BookingScreen);
  }, []);
  return (
    <HomeScreen searchHistory={searchHistory} handleWhereTo={handleWhereTo} />
  );
});
