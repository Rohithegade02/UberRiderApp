import React, { memo, useCallback, useState } from 'react';
import WelcomeBackScreen from './WelcomeBackScreen';
import { navigate } from '@navigation/NavigationUtil';
import { STACK_ROUTES } from '../../routes';

// Welcome Back Screen Container Component
export const WelcomeBackContainer = memo(() => {
  const [otpValue, setOtpValue] = useState('123456');

  const name = 'Rohit';
  const number = '9876543210';
  // TODO: add logic here
  const handleResendCode = useCallback(() => {
    console.log('Resend Code');
  }, []);

  const handleNext = useCallback(() => {
    navigate(STACK_ROUTES.HomeScreen);
  }, []);
  return (
    <WelcomeBackScreen
      name={name}
      number={number}
      otpValue={otpValue}
      setOtpValue={setOtpValue}
      handleResendCode={handleResendCode}
      handleNext={handleNext}
    />
  );
});
