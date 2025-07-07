import { StyleSheet } from 'react-native';
import {
  BoldFont18,
  Colors,
  RegularFont14,
  SemiBoldFont16,
} from '../../constants';
import { BoldFont20 } from '../../constants';
import { RegularFont16 } from '../../constants';

// Activity Screen Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    gap: 16,
    padding: 16,
  },
  title: {
    ...BoldFont20,
    color: Colors.textwhite,
    fontSize: 28,
    marginHorizontal: 20,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
    padding: 20,
  },
  rideItem: {
    padding: 16,
    backgroundColor: Colors.lightBlack,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.grayBorder,
  },
  rideItemText: {
    ...RegularFont16,
    color: Colors.textwhite,
  },
  cardContainer: {
    padding: 16,
    backgroundColor: Colors.lightBlack,
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: 'flex-end',
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cardContent: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    ...SemiBoldFont16,
    color: Colors.textwhite,
    marginBottom: 4,
  },
  cardDate: {
    ...RegularFont16,
    color: Colors.textwhite,
    marginBottom: 4,
  },
  cardFare: {
    ...RegularFont14,
    color: Colors.textwhite,
    marginBottom: 4,
  },
  rebookButton: {
    padding: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  rebookButtonText: {
    ...BoldFont18,
    color: Colors.textwhite,
  },
  separator: {
    height: 2,
    backgroundColor: Colors.grayBorder,
    width: '80%',
    alignSelf: 'flex-end',
  },
  vehicleIconContainer: {
    height: 60,
    width: 60,
    borderRadius: 12,
    padding: 8,
    backgroundColor: Colors.grayBorder,
  },
});
