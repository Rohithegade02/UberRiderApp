import { StyleProp, TextStyle, ViewStyle } from 'react-native';

// Custom Button Props
export interface CustomButtonProps {
  buttonText: string;
  buttonStyle: StyleProp<ViewStyle>;
  buttonTextStyle: StyleProp<TextStyle>;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  iconColor?: string;
  iconStyle?: StyleProp<ViewStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconContainerSize?: number;
  disabledContainerStyle?: StyleProp<ViewStyle>;
}
