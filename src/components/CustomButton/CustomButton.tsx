import { View, Text, ActivityIndicator, Pressable } from 'react-native';
import React from 'react';
import { CustomButtonProps } from './types';

export const CustomButton = ({
  buttonText,
  buttonStyle,
  buttonTextStyle,
  onPress,
  disabled,
  loading,
  icon,
  iconPosition,
  iconColor,
  iconContainerStyle,
}: CustomButtonProps) => {
  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      role="button"
    >
      {icon && iconPosition === 'left' && (
        <View style={iconContainerStyle} role="button">
          {icon}
        </View>
      )}
      <Text style={buttonTextStyle} role="button">
        {loading ? (
          <ActivityIndicator size="small" color={iconColor} />
        ) : (
          buttonText
        )}
      </Text>
      {icon && iconPosition === 'right' && (
        <View style={iconContainerStyle} role="button">
          {icon}
        </View>
      )}
    </Pressable>
  );
};
