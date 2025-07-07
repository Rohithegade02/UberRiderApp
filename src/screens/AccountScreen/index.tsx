import { lazy, Suspense } from 'react';
import AccountLoader from './AccountLoader';

// Lazy Load Account Screen
const AccountPageContainer = lazy(() =>
  import('./AccountScreenContainer').then(m => ({
    default: m.AccountScreenContainer,
  })),
);

const AccountPage = () => {
  return (
    <Suspense fallback={<AccountLoader />}>
      <AccountPageContainer />
    </Suspense>
  );
};
export default AccountPage;
