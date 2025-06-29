import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CustomIconProps } from './types';

export const CustomIcon = ({
  color,
  iconFamily,
  name,
  size,
  onPress,
  disabled,
  style,
}: CustomIconProps) => {
  return (
    <React.Fragment>
      {iconFamily === 'Ionicons' && (
        <Ionicons
          name={name}
          size={size}
          color={color}
          onPress={onPress}
          disabled={disabled}
          style={style}
        />
      )}
      {iconFamily === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          onPress={onPress}
          disabled={disabled}
          style={style}
        />
      )}
      {iconFamily === 'MaterialIcons' && (
        <MaterialIcons
          name={name}
          size={size}
          color={color}
          onPress={onPress}
          disabled={disabled}
        />
      )}
      {iconFamily === 'AntDesign' && (
        <AntDesign
          name={name}
          size={size}
          color={color}
          onPress={onPress}
          disabled={disabled}
          style={style}
        />
      )}
    </React.Fragment>
  );
};
