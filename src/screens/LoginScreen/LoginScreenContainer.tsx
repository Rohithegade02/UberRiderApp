import React, { useCallback, useState } from 'react';
import LoginScreen from './LoginScreen';
import { navigate } from '../../navigation/NavigationUtil';
import { STACK_ROUTES } from '../../routes';

// Login Screen Container Component
export const LoginScreenContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleContinue = useCallback(() => {
    setLoading(true);
    // TODO: Add your logic here
    navigate(STACK_ROUTES.HomeScreen);
    setLoading(false);
  }, []);

  const handleGoogleLogin = useCallback(() => {
    setLoading(true);
    // TODO: Add your logic here
    navigate(STACK_ROUTES.HomeScreen);
    setLoading(false);
  }, []);

  const handleAppleLogin = useCallback(() => {
    setLoading(true);
    // TODO: Add your logic here
    navigate(STACK_ROUTES.HomeScreen);
    setLoading(false);
  }, []);

  const handleEmailLogin = useCallback(() => {
    setLoading(true);
    // TODO: Add your logic here
    navigate(STACK_ROUTES.HomeScreen);
    setLoading(false);
  }, []);

  return (
    <LoginScreen
      loading={loading}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      handleContinue={handleContinue}
      handleGoogleLogin={handleGoogleLogin}
      handleAppleLogin={handleAppleLogin}
      handleEmailLogin={handleEmailLogin}
    />
  );
};
