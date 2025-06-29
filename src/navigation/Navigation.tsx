import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationUtil';
import { LoginScreenContainer } from '../screens/LoginScreen/LoginScreenContainer';
import { STACK_ROUTES } from '../routes';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
