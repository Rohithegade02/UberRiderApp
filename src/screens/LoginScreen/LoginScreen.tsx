import React, { memo } from 'react';
import { Text } from 'react-native';
import { LoginScreenText } from './constants';
import { styles } from './styles';
import { LoginScreenProps } from './types';
import { CustomButton } from '../../components/CustomButton';
import { CustomItemSeparator } from '../../components/ItemSeparator';
import { LoginSocialButton } from './LoginSocialButton';
import { CustomIcon } from '../../components/CustomIcon';
import { Colors } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CountryPhoneInput } from './LoginCountryPhoneInput';

// Login Screen Presentational Component
const LoginScreen = ({
  phoneNumber,
  setPhoneNumber,
  handleContinue,
  loading,
  handleGoogleLogin,
  handleAppleLogin,
  handleEmailLogin,
  // countryCode,
  setCountryCode,
  countryName,
  setCountryName,
}: LoginScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{LoginScreenText.title}</Text>

      {/* Mobile Number Input */}
      <CountryPhoneInput
        countryName={countryName}
        setCountryName={setCountryName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        setCountryCode={setCountryCode}
      />

      {/* Continue Button */}
      <CustomButton
        buttonText={LoginScreenText.continue}
        buttonStyle={styles.continueButton}
        buttonTextStyle={styles.continueButtonText}
        onPress={handleContinue}
        loading={loading}
        disabled={loading || phoneNumber.length !== 10}
        disabledContainerStyle={styles.disabledContainerStyle}
        iconColor={Colors.white}
      />
      {/* OR Separator */}
      <CustomItemSeparator
        itemSeparatorText={LoginScreenText.or}
        itemSeparatorTextStyle={styles.itemSeparatorText}
        dividerLineStyle={styles.dividerLineStyle}
      />
      {/* Social Login Buttons */}
      <LoginSocialButton
        handleGoogleLogin={handleGoogleLogin}
        handleAppleLogin={handleAppleLogin}
        handleEmailLogin={handleEmailLogin}
      />
      {/* OR Separator */}
      <CustomItemSeparator
        itemSeparatorText={LoginScreenText.or}
        itemSeparatorTextStyle={styles.itemSeparatorText}
        dividerLineStyle={styles.dividerLineStyle}
      />
      {/* Find My Account Button */}
      <CustomButton
        buttonText={LoginScreenText.findMyAccount}
        buttonStyle={styles.findMyAccountButton}
        buttonTextStyle={styles.findMyAccountButtonText}
        onPress={handleContinue}
        icon={<CustomIcon name="search" iconFamily="Ionicons" size={24} />}
        iconPosition="left"
        iconColor="black"
      />
      {/* Footer Text */}
      <Text style={styles.footerText}>{LoginScreenText.footerText}</Text>
    </SafeAreaView>
  );
};

export default memo(LoginScreen);
