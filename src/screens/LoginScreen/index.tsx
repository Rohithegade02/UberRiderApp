import { lazy, Suspense } from 'react';
import LoginLoader from './LoginLoader';

// Lazy Load Login Screen
const LoginScreenContainer = lazy(() =>
  import('./LoginScreenContainer').then(m => ({
    default: m.LoginScreenContainer,
  })),
);
const LoginPage = () => {
  return (
    <Suspense fallback={<LoginLoader />}>
      <LoginScreenContainer />
    </Suspense>
  );
};
export default LoginPage;
