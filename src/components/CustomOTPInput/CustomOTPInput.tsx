import { View } from 'react-native';
import React from 'react';
import { CustomInput } from '../CustomInput';
import { styles } from './styles';
import { CustomOTPInputProps } from './types';

export const CustomOTPInput = ({
  otpValue,
  onChangeText,
  maxLength = 6,
  otpContainerStyle,
  otpInputLabelStyle,
}: CustomOTPInputProps) => {
  const handleChangeText = (text: string, index: number) => {
    // Only allow numeric input
    const numericValue = text.replace(/[^0-9]/g, '');

    // Update the OTP value at the specific index
    const newOtp = otpValue.split('');
    newOtp[index] = numericValue.slice(-1); // Take only the last character if multiple are pasted

    // Join the array into a string and update the parent
    onChangeText(newOtp.join('').slice(0, maxLength));

    // Auto-focus to next input if available
    if (numericValue && index < maxLength - 1) {
      // You might need to implement a ref-based focus mechanism here
      // This is a simplified version
      const nextInput = index + 1;
      // Focus logic would go here if using refs
    }
  };
  console.log('otpValue', otpValue);

  return (
    <View style={[styles.container, otpContainerStyle]}>
      {[...Array(maxLength)].map((_, index) => (
        <CustomInput
          key={index}
          textInputLabel={`OTP ${index + 1}`}
          textInputValue={otpValue[index] || ''}
          textInputOnChangeText={(text: string) =>
            handleChangeText(text, index)
          }
          textInputKeyboardType="number-pad"
          textInputStyle={[styles.otpInput, otpInputLabelStyle]}
          textInputMaxLength={1}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};
