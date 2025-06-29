import { StyleSheet } from 'react-native';
import { RegularFont12 } from 'src/constants';
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
    backgroundColor: '#2C3E50',
  },
  dividerText: {
    ...RegularFont12,
    color: '#2C3E50',
    marginHorizontal: width * 0.01,
  },
});
