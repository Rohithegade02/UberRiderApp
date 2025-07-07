import { lazy, Suspense } from 'react';
import ActivityLoader from './ActivityLoader';

// Lazy Load Activity Screen
const ActivityPageContainer = lazy(() =>
  import('./ActivityScreenContainer').then(m => ({
    default: m.ActivityScreenContainer,
  })),
);
const ActivityPage = () => {
  return (
    <Suspense fallback={<ActivityLoader />}>
      <ActivityPageContainer />
    </Suspense>
  );
};
export default ActivityPage;
