import { StyleProp, TextStyle, ViewStyle } from 'react-native';

// Custom Item Separator Props
export interface ItemSeparatorProps {
  itemSeparatorText?: string;
  dividerLineStyle?: StyleProp<ViewStyle>;
  itemSeparatorStyle?: StyleProp<ViewStyle>;
  itemSeparatorTextStyle?: StyleProp<TextStyle>;
}
