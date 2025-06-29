export interface WelcomeBackScreenProps extends WelcomeBackOTPProps {
  name: string;
  handleNext: () => void;
}

export interface WelcomeBackOTPProps {
  number: string;
  otpValue: string;
  setOtpValue: (otpValue: string) => void;
  handleResendCode: () => void;
}
