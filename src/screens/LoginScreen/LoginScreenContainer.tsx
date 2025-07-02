import React, { memo, useCallback, useState } from 'react';
import LoginScreen from './LoginScreen';
import { navigate } from '../../navigation/NavigationUtil';
import { STACK_ROUTES } from '../../routes';
import { Alert } from 'react-native';
import { formatPhoneNumber, sendOTP } from '../../services';
import { validatePhoneNumber } from '../../utils/validatePhoneNumber';

// Login Screen Container Component
export const LoginScreenContainer = memo(() => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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
      // Format phone number with country code (+91 for India)
      const formattedPhone = formatPhoneNumber(phoneNumber, '+91');

      // Send OTP using Firebase
      const result = await sendOTP(formattedPhone);

      if (result.success) {
        Alert.alert('OTP Sent', `Verification code sent to ${formattedPhone}`, [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to OTP verification screen
              navigate(STACK_ROUTES.WelcomeBackScreen);
            },
          },
        ]);
      } else {
        Alert.alert('Error', result.error);
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [phoneNumber]);

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
    />
  );
});
