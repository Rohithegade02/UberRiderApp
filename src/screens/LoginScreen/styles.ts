import { StyleSheet } from 'react-native';
import { RegularFont22 } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...RegularFont22,
    marginBottom: 30,
  },
});
