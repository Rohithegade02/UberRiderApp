import { View, Text } from 'react-native';
import React, { memo } from 'react';
import { WelcomeBackOTPProps } from './types';
import { WelcomeBackScreenText } from './constants';
import { styles } from './styles';
import { CustomOTPInput } from '../../components/CustomOTPInput';

const WelcomeBackOTP = memo(
  ({
    number,
    otpValue,
    setOtpValue,
    handleResendCode,
  }: // timer,
  // canResend,
  // loading,
  // resendLoading,
  WelcomeBackOTPProps) => {
    return (
      <View style={styles.containerOTP}>
        <Text style={styles.otpText}>
          {WelcomeBackScreenText.otpText} {number}
        </Text>
        <Text style={styles.changedPhoneNumber}>
          {WelcomeBackScreenText.changedPhoneNumber}
        </Text>
        {/* OTP Input */}
        <CustomOTPInput
          otpValue={otpValue}
          onChangeText={setOtpValue}
          onBlur={handleResendCode}
          maxLength={6}
          otpContainerStyle={styles.customOTPInput}
          otpInputLabelStyle={styles.customOTPInputLabel}
        />
      </View>
    );
  },
);

export default WelcomeBackOTP;
