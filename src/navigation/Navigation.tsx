import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationUtil';
import { LoginScreenContainer } from '../screens/LoginScreen';
import { STACK_ROUTES } from '../routes';
import { WelcomeBackContainer } from '../screens/WelcomeBackScreen';
import { BookingScreenContainer } from '../screens/BookingScreen';
import { TabNavigatorContainer } from './TabNavigator';
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import { SplashScreen } from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
};

const Navigation: React.FC = () => {
  const [authState, setAuthState] = React.useState<AuthState>({
    isLoading: true,
    isAuthenticated: false,
    token: null,
  });

  const { getItem } = useAsyncStorage();

  React.useEffect(() => {
    const checkAuthState = async () => {
      try {
        const token = await getItem('token');

        setAuthState({
          isLoading: false,
          isAuthenticated: !!token, // or !!token && isValid
          token,
        });
      } catch (error) {
        console.error('Error checking auth state:', error);
        setAuthState({
          isLoading: false,
          isAuthenticated: false,
          token: null,
        });
      }
    };

    checkAuthState();
  }, []);

  if (authState.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {!authState.isAuthenticated ? (
        <Stack.Navigator
          initialRouteName={STACK_ROUTES.LoginScreen}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={STACK_ROUTES.LoginScreen}
            component={LoginScreenContainer}
          />
          <Stack.Screen
            name={STACK_ROUTES.WelcomeBackScreen}
            component={WelcomeBackContainer}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={STACK_ROUTES.TabNavigator}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={STACK_ROUTES.TabNavigator}
            component={TabNavigatorContainer}
          />
          <Stack.Screen
            name={STACK_ROUTES.BookingScreen}
            component={BookingScreenContainer}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
