import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface CustomDropDownProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  title: string;
  onPress: () => void;
  styles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
