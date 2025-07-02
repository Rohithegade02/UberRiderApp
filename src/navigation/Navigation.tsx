import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationUtil';
import { LoginScreenContainer } from '../screens/LoginScreen';
import { STACK_ROUTES } from '../routes';
import { WelcomeBackContainer } from '../screens/WelcomeBackScreen';
import { BookingScreenContainer } from '../screens/BookingScreen';
import { TabNavigatorContainer } from './TabNavigator';

const Stack = createNativeStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={STACK_ROUTES.LoginScreen}>
        <Stack.Screen
          name={STACK_ROUTES.LoginScreen}
          component={LoginScreenContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={STACK_ROUTES.WelcomeBackScreen}
          component={WelcomeBackContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={STACK_ROUTES.BookingScreen}
          component={BookingScreenContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={STACK_ROUTES.TabNavigator}
          component={TabNavigatorContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
