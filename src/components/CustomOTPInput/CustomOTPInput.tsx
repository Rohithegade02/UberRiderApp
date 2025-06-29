import { View } from 'react-native';
import React from 'react';
import { CustomInput } from '../CustomInput';
import { styles } from './styles';
import { CustomOTPInputProps } from './types';

export const CustomOTPInput = ({
  otpValue,
  onChangeText,
  //   onBlur,
  maxLength = 6,
  otpContainerStyle,
  otpInputLabelStyle,
}: CustomOTPInputProps) => {
  return (
    <View style={[styles.container, otpContainerStyle]}>
      {[...Array(maxLength)].map((_, index) => (
        <CustomInput
          key={index}
          textInputLabel={`OTP ${index + 1}`}
          textInputValue={otpValue[index] || ''}
          textInputOnChangeText={(text: string) => {
            onChangeText(text.padStart(maxLength, '0'));
          }}
          textInputKeyboardType="number-pad"
          textInputStyle={[styles.otpInput, otpInputLabelStyle]}
          textInputMaxLength={1}
        />
      ))}
    </View>
  );
};
