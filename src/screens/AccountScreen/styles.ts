import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
import { BoldFont18 } from '../../constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  title: {
    ...BoldFont18,
    color: Colors.textwhite,
    alignSelf: 'center',
  },
});
