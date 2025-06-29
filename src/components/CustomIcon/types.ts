import { StyleProp, ViewStyle } from 'react-native';

export interface CustomIconProps {
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress?: () => void;
  color?: string;
  size: number;
  name: string;
  iconFamily:
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'AntDesign';
}
