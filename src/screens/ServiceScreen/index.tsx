import { lazy, Suspense } from 'react';
import ServiceLoader from './ServiceLoader';

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
