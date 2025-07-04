export interface LoginSocialButtonProps {
  handleGoogleLogin: () => void;
  handleAppleLogin: () => void;
  loading: boolean;
  handleEmailLogin: () => void;
}
export interface LoginScreenProps extends LoginSocialButtonProps {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  handleContinue: () => void;
  loading: boolean;
}
