import { lazy, Suspense } from 'react';
import WelcomeBackLoader from './WelcomeBackLoader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const WelcomeBackScreenContainer = lazy(() =>
  import('./WelcomeBackContainer').then(m => ({
    default: m.WelcomeBackContainer,
  })),
);
const WelcomeBackPage = ({
  route,
  navigation,
}: NativeStackScreenProps<any, any>) => {
  return (
    <Suspense fallback={<WelcomeBackLoader />}>
      <WelcomeBackScreenContainer route={route} navigation={navigation} />
    </Suspense>
  );
};
export default WelcomeBackPage;
