import { lazy, Suspense } from 'react';
import ServiceLoader from './ServiceLoader';

// Lazy Load Service Screen
const ServicePageContainer = lazy(() =>
  import('./ServiceScreenContainer').then(m => ({
    default: m.ServiceScreenContainer,
  })),
);
const ServicePage = () => {
  return (
    <Suspense fallback={<ServiceLoader />}>
      <ServicePageContainer />
    </Suspense>
  );
};
export default ServicePage;
