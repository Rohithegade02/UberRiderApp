import React from 'react';
import { View, Text } from 'react-native';
import { LoginScreenText } from './constants';
import { styles } from './styles';
import { CustomInput } from '../../components/CustomInput';
import { LoginScreenProps } from './types';
import { CustomButton } from '../../components/CustomButton';
import { CustomItemSeparator } from '../../components/ItemSeparator';
import { LoginSocialButton } from './LoginSocialButton';
import { CustomIcon } from '../../components/CustomIcon';

// Login Screen Presentational Component
const LoginScreen = ({
  phoneNumber,
  setPhoneNumber,
  handleContinue,
  loading,
  handleGoogleLogin,
  handleAppleLogin,
  handleEmailLogin,
}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LoginScreenText.title}</Text>
      {/* Mobile Number Input */}

      {/* //TODO: add phone number validation and add country flag dropdown */}
      <View>
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
      />
      <CustomItemSeparator
        itemSeparatorText={LoginScreenText.or}
        itemSeparatorTextStyle={styles.itemSeparatorText}
        dividerLineStyle={styles.dividerLineStyle}
      />
      <LoginSocialButton
        handleGoogleLogin={handleGoogleLogin}
        handleAppleLogin={handleAppleLogin}
        handleEmailLogin={handleEmailLogin}
        loading={loading}
      />
      <CustomItemSeparator
        itemSeparatorText={LoginScreenText.or}
        itemSeparatorTextStyle={styles.itemSeparatorText}
        dividerLineStyle={styles.dividerLineStyle}
      />
      <CustomButton
        buttonText={LoginScreenText.findMyAccount}
        buttonStyle={styles.findMyAccountButton}
        buttonTextStyle={styles.findMyAccountButtonText}
        onPress={handleContinue}
        loading={loading}
        icon={
          <CustomIcon
            name="email"
            iconFamily="MaterialCommunityIcons"
            size={24}
          />
        }
        iconPosition="left"
        iconColor="black"
      />
      <Text style={styles.footerText}>{LoginScreenText.footerText}</Text>
    </View>
  );
};

export default LoginScreen;
