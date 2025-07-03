import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { CustomInputProps } from './types';
import { styles } from './styles';
import { Colors } from '../../constants';

//custom TextInput
export const CustomInput = ({
  textInputLabel,
  textInputPlaceholder,
  textInputValue,
  textInputOnChangeText,
  textInputSecureTextEntry,
  textInputStyle,
  showTextInputLabel,
  showTextInputError,
  textInputError,
  textInputLabelStyle,
  textInputKeyboardType,
  textInputMaxLength,
  placeholderTextStyle,
  autoFocus,
  editable,
  ref,
  onKeyPress,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      {showTextInputLabel && (
        <Text style={[styles.label, textInputLabelStyle]}>
          {textInputLabel}
        </Text>
      )}
      <TextInput
        placeholder={textInputPlaceholder}
        value={textInputValue}
        onChangeText={textInputOnChangeText}
        secureTextEntry={textInputSecureTextEntry}
        style={[styles.textInput, textInputStyle]}
        placeholderTextColor={
          placeholderTextStyle || (Colors.textInputPlaceholder as any)
        }
        keyboardType={textInputKeyboardType}
        maxLength={textInputMaxLength}
        accessibilityLabel={textInputPlaceholder}
        accessibilityRole="text"
        autoFocus={autoFocus}
        editable={editable}
        ref={ref}
        onKeyPress={onKeyPress}
      />
      {showTextInputError && (
        <Text style={styles.errorText}>{textInputError}</Text>
      )}
    </View>
  );
};
