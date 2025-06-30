import React, { memo, useState } from 'react';
import HomeScreen from './HomeScreen';

// Home Screen Container Component
export const HomeScreenContainer = memo(() => {
  const [searchHistory, setSearchHistory] = useState<string>('Hubballi');
  return <HomeScreen searchHistory={searchHistory} />;
});
