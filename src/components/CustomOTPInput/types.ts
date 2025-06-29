import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface CustomOTPInputProps {
  otpValue: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  maxLength?: number;
  otpContainerStyle?: StyleProp<ViewStyle>;
  otpInputLabelStyle?: StyleProp<TextStyle>;
}
