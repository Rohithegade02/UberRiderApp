import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { LoginScreenText } from './constants';
import { styles } from './styles';
import { CustomInput } from '../../components/CustomInput';
import { LoginScreenProps } from './types';
import { CustomButton } from '../../components/CustomButton';
import { CustomItemSeparator } from '../../components/ItemSeparator';
import { LoginSocialButton } from './LoginSocialButton';
import { CustomIcon } from '../../components/CustomIcon';
import { Colors } from '../../constants';
import CountryPicker from 'react-native-country-picker-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

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

      <View style={styles.countryPickerContainer}>
        <CountryPicker
          countryCode={countryName || 'IN'}
          withFilter
          withFlag
          // withCountryNameButton
          withAlphaFilter
          withCallingCode
          withCallingCodeButton
          withCallingCodePrefix
          onSelect={country => {
            setCountryName(country.cca2 || 'IN');
            setCountryCode(country.callingCode?.[0] || '91');
          }}
          containerButtonStyle={styles.countryPickerButton}
          countryButtonStyle={styles.countryButton}
        />
        <CustomInput
          textInputLabel={LoginScreenText.title}
          textInputPlaceholder={LoginScreenText.title}
          textInputValue={phoneNumber}
          textInputOnChangeText={setPhoneNumber}
          textInputKeyboardType="phone-pad"
          textInputStyle={styles.input}
          textInputMaxLength={10}
        />
      </View>
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
        loading={loading}
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
