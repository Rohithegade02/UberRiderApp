import { StyleProp, TextStyle } from 'react-native';

export interface CustomHeaderProps {
  leftText?: string;
  rightText?: string;
  leftIcon?: string;
  rightIcon?: string;
  leftPress?: () => void;
  rightPress?: () => void;
  leftTextStyle?: StyleProp<TextStyle>;
  rightTextStyle?: StyleProp<TextStyle>;
}
