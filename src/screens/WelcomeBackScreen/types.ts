// Welcome Back Screen Props
export interface WelcomeBackScreenProps extends WelcomeBackOTPProps {
  name: string;
  handleNext: () => void;
}

// Welcome Back OTP Props
export interface WelcomeBackOTPProps {
  number: string;
  otpValue: string;
  setOtpValue: (otpValue: string) => void;
  handleResendCode: () => void;
  timer: number;
  canResend: boolean;
  loading: boolean;
  resendLoading: boolean;
}

export interface WelcomeBackScreenParams {
  phoneNumber: string;
}
