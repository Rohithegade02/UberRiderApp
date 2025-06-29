import { Text, View } from 'react-native';
import { styles } from './styles';
import { ItemSeparatorProps } from './types';

// Custom Item Separator Component
export const CustomItemSeparator = ({
  itemSeparatorText,
  dividerLineStyle,
  itemSeparatorStyle,
  itemSeparatorTextStyle,
}: ItemSeparatorProps) => {
  return (
    <View style={[styles.dividerContainer, itemSeparatorStyle]}>
      <View style={[styles.dividerLine, dividerLineStyle]} />
      {itemSeparatorText && (
        <Text style={[styles.dividerText, itemSeparatorTextStyle]}>
          {itemSeparatorText ? itemSeparatorText : ''}
        </Text>
      )}
      <View style={[styles.dividerLine, dividerLineStyle]} />
    </View>
  );
};
