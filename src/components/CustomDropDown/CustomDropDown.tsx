import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomDropDownProps } from './types';
import { CustomIcon } from '../CustomIcon';
import { Colors } from '../../constants';

export const CustomDropDown = ({
  styles,
  leftIcon,
  rightIcon = false,
  title,
  onPress,
  textStyle,
}: CustomDropDownProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      {leftIcon && leftIcon}
      <View>
        <Text style={textStyle}>{title}</Text>
      </View>
      {rightIcon ? (
        rightIcon
      ) : (
        <CustomIcon
          name="keyboard-arrow-down"
          size={24}
          color={Colors.textwhite}
          iconFamily="MaterialIcons"
        />
      )}
    </TouchableOpacity>
  );
};
