import { StyleSheet } from 'react-native';
import { Colors, RegularFont12 } from '../../constants';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Custom Item Separator Styles
export const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.itemGraySeparator,
  },
  dividerText: {
    ...RegularFont12,
    color: Colors.itemGraySeparator,
    marginHorizontal: width * 0.01,
  },
});
