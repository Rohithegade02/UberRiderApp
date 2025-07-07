import React, { memo } from 'react';
import { CountryPhoneInputProps } from './types';
import CountryPicker from 'react-native-country-picker-modal';
import { CustomInput } from '../../components/CustomInput';
import { LoginScreenText } from './constants';
import { styles } from './styles';
import { View } from 'react-native';

// Country Phone Input Presentational Component
export const CountryPhoneInput = memo(
  ({
    countryName,
    setCountryName,
    phoneNumber,
    setPhoneNumber,
    setCountryCode,
  }: CountryPhoneInputProps) => {
    return (
      <View style={styles.countryPickerContainer}>
        <CountryPicker
          countryCode={(countryName || 'IN') as any}
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
    );
  },
);
