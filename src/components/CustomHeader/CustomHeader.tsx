import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomHeaderProps } from './types';
import { styles } from './styles';

export const CustomHeader = ({
  leftText,
  rightText,
  leftIcon,
  rightIcon,
  leftPress,
  rightPress,
  leftTextStyle,
  rightTextStyle,
}: CustomHeaderProps) => {
  return (
    <View style={styles.container}>
      {leftIcon && <>{leftIcon}</>}
      {leftText && (
        <TouchableOpacity onPress={leftPress}>
          <Text style={leftTextStyle}>{leftText}</Text>
        </TouchableOpacity>
      )}
      {rightIcon && <>{rightIcon}</>}
      {rightText && (
        <TouchableOpacity onPress={rightPress}>
          <Text style={rightTextStyle}>{rightText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
