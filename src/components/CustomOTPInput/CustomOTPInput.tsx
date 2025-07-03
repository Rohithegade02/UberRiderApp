import { View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { CustomInput } from '../CustomInput';
import { styles } from './styles';
import { CustomOTPInputProps } from './types';

export const CustomOTPInput = ({
  otpValue,
  onChangeText,
  maxLength = 6,
  otpContainerStyle,
  onBlur,
  otpInputLabelStyle,
  ref,
}: CustomOTPInputProps) => {
  // Initialize refs array
  const inputRefs = useRef<any[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, maxLength);
  }, [maxLength]);

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
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Handle backspace to move to previous input
    if (e.nativeEvent.key === 'Backspace' && !otpValue[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={[styles.container, otpContainerStyle]}>
      {[...Array(maxLength)].map((_, index) => (
        <CustomInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref)}
          textInputLabel={`OTP ${index + 1}`}
          textInputValue={otpValue[index] || ''}
          textInputOnChangeText={(text: string) =>
            handleChangeText(text, index)
          }
          textInputKeyboardType="number-pad"
          textInputStyle={[styles.otpInput, otpInputLabelStyle]}
          textInputMaxLength={1}
          autoFocus={index === 0}
          onKeyPress={e => handleKeyPress(e, index)}
          onBlur={onBlur} // Add this line
        />
      ))}
    </View>
  );
};
