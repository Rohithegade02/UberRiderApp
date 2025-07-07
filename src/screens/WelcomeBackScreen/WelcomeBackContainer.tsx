import React, { memo, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import WelcomeBackScreen from './WelcomeBackScreen';
import { sendOTP, verifyOTP } from '../../services';
import { Alert } from 'react-native';
import { WelcomeBackScreenParams } from './types';
import { useAsyncStorage } from '../../hooks/useAsyncStorage';

// Welcome Back Screen Container Component

export const WelcomeBackContainer = memo(
  ({ route }: NativeStackScreenProps<any, any>) => {
    const { phoneNumber } = route.params as WelcomeBackScreenParams;
    const { setItem } = useAsyncStorage();
    const [otpValue, setOtpValue] = useState('');
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(true);
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);

    const name = 'Rohit';
    const number = phoneNumber;

    // Timer for resend functionality
    useEffect(() => {
      let interval: NodeJS.Timeout | number | null = null;
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer(timer => timer - 1);
        }, 1000);
      } else {
        setCanResend(true);
      }
      return () => clearInterval(interval as any);
    }, [timer]);

    const handleVerifyOTP = async () => {
      if (!otpValue || otpValue.length !== 6) {
        Alert.alert('Error', 'Please enter a valid 6-digit OTP');
        return;
      }

      setLoading(true);

      try {
        const result = await verifyOTP(otpValue);

        console.log(result);
        await setItem('token', result.success);
      } catch (error) {
        Alert.alert('Error', 'Verification failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    const handleResendOTP = async () => {
      setResendLoading(true);

      try {
        const result = await sendOTP(number);

        if (result.success) {
          Alert.alert('Success', 'OTP sent successfully!');
          setTimer(60);
          setCanResend(false);
          setOtpValue(''); // Clear previous OTP
        } else {
          Alert.alert('Error', result.error);
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to resend OTP. Please try again.');
      } finally {
        setResendLoading(false);
      }
    };

    return (
      <WelcomeBackScreen
        name={name}
        number={number}
        otpValue={otpValue}
        setOtpValue={setOtpValue}
        handleResendCode={handleResendOTP}
        handleNext={handleVerifyOTP}
        timer={timer}
        canResend={canResend}
        loading={loading}
        resendLoading={resendLoading}
      />
    );
  },
);
