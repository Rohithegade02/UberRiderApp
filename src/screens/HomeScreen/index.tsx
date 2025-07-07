import { lazy, Suspense } from 'react';
import HomeLoader from './HomeLoader';

const HomeScreenContainer = lazy(() =>
  import('./HomeScreenContainer').then(m => ({
    default: m.HomeScreenContainer,
  })),
);
const HomePage = () => {
  return (
    <Suspense fallback={<HomeLoader />}>
      <HomeScreenContainer />
    </Suspense>
  );
};
export default HomePage;
