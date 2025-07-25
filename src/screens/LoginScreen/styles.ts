import { Dimensions, StyleSheet } from 'react-native';
import {
  BoldFont18,
  Colors,
  RegularFont12,
  SemiBoldFont18,
  SemiBoldFont22,
} from '../../constants';

const width = Dimensions.get('window').width;

// Login Screen Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
    gap: 12,
  },
  title: {
    ...SemiBoldFont22,
  },
  input: {
    backgroundColor: Colors.grayBackground,
    borderRadius: 8,
    padding: 12,
    paddingHorizontal: 16,
    borderColor: Colors.grayBackground,
    width: width * 0.63,
  },
  continueButton: {
    backgroundColor: Colors.black,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderColor: Colors.grayBackground,
    marginBottom: 12,
    alignItems: 'center',
  },
  continueButtonText: {
    ...SemiBoldFont18,
    color: Colors.white,
    alignSelf: 'center',
  },
  itemSeparatorText: {
    color: Colors.itemSeparator,
  },
  dividerLineStyle: {
    backgroundColor: Colors.itemSeparator,
  },
  socialButton: {
    backgroundColor: Colors.grayBackground,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderColor: Colors.grayBackground,
    marginBottom: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  socialButtonText: {
    ...BoldFont18,
    color: Colors.black,
    alignSelf: 'center',
  },
  findMyAccountButton: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderColor: Colors.grayBackground,
    marginBottom: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  findMyAccountButtonText: {
    ...BoldFont18,
    color: Colors.black,
    alignSelf: 'center',
  },
  footerText: {
    ...RegularFont12,
    color: Colors.itemSeparator,
    textAlign: 'left',
  },
  disabledContainerStyle: {
    opacity: 0.5,
  },
  countryPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  countryPickerButton: {
    backgroundColor: Colors.grayBackground,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderColor: Colors.grayBackground,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  countryButton: {
    ...BoldFont18,
    color: Colors.black,
    alignSelf: 'center',
  },
});
