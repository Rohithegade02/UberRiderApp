import { SafeAreaView, View, Text } from 'react-native';
import React, { memo } from 'react';
import { WelcomeBackScreenProps } from './types';
import { styles } from './styles';
import WelcomeBackOTP from './WelcomeBackOTP';
import { CustomButton } from '../../components/CustomButton';
import { WelcomeBackScreenText } from './constants';

// Welcome Back Screen Presentational Component
const WelcomeBackScreen = ({
  name,
  number,
  otpValue,
  setOtpValue,
  handleResendCode,
  handleNext,
  timer,
  canResend,
  loading,
  resendLoading,
}: WelcomeBackScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {WelcomeBackScreenText.title} {name} .
      </Text>

      {/* OTP Input */}
      <WelcomeBackOTP
        number={number}
        otpValue={otpValue}
        setOtpValue={setOtpValue}
        handleResendCode={handleResendCode}
        timer={timer}
        canResend={canResend}
        loading={loading}
        resendLoading={resendLoading}
      />
      {/* Resend Button */}
      <CustomButton
        buttonText={WelcomeBackScreenText.resendCode}
        buttonStyle={styles.resendButton}
        buttonTextStyle={styles.resendButtonText}
        onPress={handleResendCode}
        disabled={!canResend}
        disabledContainerStyle={styles.disabledContainerStyle}
      />
      {/* Item Separator */}
      <View style={styles.itemSeparator} />
      {/* Next Button */}
      <CustomButton
        buttonText={WelcomeBackScreenText.nextButton}
        buttonStyle={styles.nextButton}
        buttonTextStyle={styles.resendButtonText}
        onPress={handleNext}
        disabled={otpValue.length !== 6}
        disabledContainerStyle={styles.disabledContainerStyle}
      />
    </SafeAreaView>
  );
};

export default memo(WelcomeBackScreen);
