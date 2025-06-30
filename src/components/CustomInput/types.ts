import { StyleProp, TextStyle } from 'react-native';

// Custom Input Props
export interface CustomInputProps {
  textInputLabel?: string;
  textInputPlaceholder?: string;
  textInputValue: string;
  textInputOnChangeText: (text: string) => void;
  textInputSecureTextEntry?: boolean;
  textInputStyle?: StyleProp<TextStyle>;
  showTextInputError?: boolean;
  showTextInputLabel?: boolean;
  textInputError?: string;
  textInputLabelStyle?: StyleProp<TextStyle>;
  textInputKeyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  textInputMaxLength?: number;
}
