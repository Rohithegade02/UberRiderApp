export interface LoginSocialButtonProps {
  handleGoogleLogin: () => void;
  handleAppleLogin: () => void;
  handleEmailLogin: () => void;
}
export interface LoginScreenProps extends LoginSocialButtonProps {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  handleContinue: () => void;
  countryCode: string;
  setCountryCode: (countryCode: string) => void;
  countryName: string;
  setCountryName: (countryName: string) => void;
  loading: boolean;
}

export interface CountryPhoneInputProps {
  countryName: string;
  setCountryName: (countryName: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  setCountryCode: (countryCode: string) => void;
}
