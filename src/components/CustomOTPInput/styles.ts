import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.grayBackground,
    borderRadius: 5,
    textAlign: 'center',
  },
});
