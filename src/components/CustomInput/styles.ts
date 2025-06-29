import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Colors, RegularFont14 } from '../../constants';

const { width } = Dimensions.get('window');
// styles for custom Text Input
export const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    ...RegularFont14,
    color: Colors.textInputLabel,
  },
  textInput: {
    ...RegularFont14,
    color: Colors.textInputLabel,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 24,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: Colors.grayBorder,
  },
  errorText: {
    ...RegularFont14,
    color: Colors.textInputError,
  },
});
