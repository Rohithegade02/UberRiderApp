import { StyleSheet } from 'react-native';
import { Colors, SemiBoldFont16, SemiBoldFont22 } from '../../constants';

// Welcome Back Screen Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: Colors.white,
  },
  title: {
    ...SemiBoldFont22,
    fontWeight: 'bold',
  },
  changedPhoneNumber: {
    textDecorationLine: 'underline',
    ...SemiBoldFont16,
  },
  containerOTP: {
    gap: 20,
  },
  customOTPInput: {},
  customOTPInputLabel: {
    backgroundColor: Colors.otpInputBackground,
    borderColor: Colors.white,
  },
  disabledContainerStyle: {
    opacity: 0.2,
  },
  resendButton: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: '50%',
    backgroundColor: Colors.grayBackground,
    opacity: 0.5,
  },
  resendButtonText: {
    ...SemiBoldFont16,
    color: Colors.black,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  itemSeparator: {
    flex: 1,
  },
  nextButton: {
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: '50%',
    backgroundColor: Colors.textwhite,
    opacity: 0.9,
    alignSelf: 'flex-end',
    color: Colors.black,
  },
});
