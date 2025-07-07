import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationUtil';
import LoginPage from '../screens/LoginScreen';
import { STACK_ROUTES } from '../routes';
import BookingPage from '../screens/BookingScreen';
import { TabNavigatorContainer } from './TabNavigator';
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import { SplashScreen } from '../screens/SplashScreen';
import WelcomeBackPage from '../screens/WelcomeBackScreen';

const Stack = createNativeStackNavigator();

type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
};

const Navigation: React.FC = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isLoading: true,
    isAuthenticated: false,
    token: null,
  });

  const { getItem } = useAsyncStorage();

  useEffect(() => {
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

  // Listen for storage changes to update auth state
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const token = await getItem('token');
        const isAuthenticated = !!token;

        if (isAuthenticated !== authState.isAuthenticated) {
          setAuthState(prev => ({
            ...prev,
            isAuthenticated,
            token,
          }));
        }
      } catch (error) {
        console.error('Error checking auth state:', error);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [authState.isAuthenticated, getItem]);

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
          <Stack.Screen name={STACK_ROUTES.LoginScreen} component={LoginPage} />
          <Stack.Screen
            name={STACK_ROUTES.WelcomeBackScreen}
            component={WelcomeBackPage}
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
            component={BookingPage}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
