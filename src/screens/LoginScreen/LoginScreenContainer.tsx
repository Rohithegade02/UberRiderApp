import React, { memo, useCallback, useState } from 'react';
import LoginScreen from './LoginScreen';
import { navigate } from '../../navigation/NavigationUtil';
import { STACK_ROUTES } from '../../routes';
import { Alert } from 'react-native';
import { validatePhoneNumber } from '../../utils/validatePhoneNumber';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';
import { sendOTP } from '../../services';

// Login Screen Container Component
export const LoginScreenContainer = memo(() => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  //country code
  const [countryCode, setCountryCode] = useState<string>('91');
  const [countryName, setCountryName] = useState<string>('IN');

  const handleContinue = useCallback(async () => {
    // Validate phone number
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);

    try {
      const formattedPhone = formatPhoneNumber(
        phoneNumber,
        countryCode ?? '91',
      );
      // Send OTP using Firebase
      await sendOTP(formattedPhone);

      navigate(STACK_ROUTES.WelcomeBackScreen, { phoneNumber });
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [phoneNumber, countryCode]);

  const handleGoogleLogin = useCallback(() => {
    // Implement Google login logic
    Alert.alert('Info', 'Google login will be implemented');
  }, []);

  const handleAppleLogin = useCallback(() => {
    // Implement Apple login logic
    Alert.alert('Info', 'Apple login will be implemented');
  }, []);

  const handleEmailLogin = useCallback(() => {
    // Implement Email login logic
    Alert.alert('Info', 'Email login will be implemented');
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
      countryCode={countryCode}
      setCountryCode={setCountryCode}
      countryName={countryName}
      setCountryName={setCountryName}
    />
  );
});
