import { CustomIcon } from '../components/CustomIcon';
import React from 'react';

interface TabIconProps {
  focused: boolean;
  size: number;
  color: string;
}

export const HomeIcon: React.FC<TabIconProps> = ({ focused, color, size }) => {
  return (
    <CustomIcon
      name={focused ? 'home' : 'home-outline'}
      size={size}
      iconFamily="Ionicons"
      color={color}
    />
  );
};

export const ActivityIcon: React.FC<TabIconProps> = ({
  focused,
  color,
  size,
}) => {
  return (
    <CustomIcon
      name={focused ? 'history' : 'history'}
      size={size}
      iconFamily="MaterialCommunityIcons"
      color={color}
    />
  );
};
export const AccountIcon: React.FC<TabIconProps> = ({
  focused,
  color,
  size,
}) => {
  return (
    <CustomIcon
      name={focused ? 'account' : 'account-outline'}
      color={color}
      size={size}
      iconFamily="MaterialCommunityIcons"
    />
  );
};

export const PaymentIcon: React.FC<TabIconProps> = ({
  focused,
  color,
  size,
}) => {
  return (
    <CustomIcon
      name={focused ? 'wallet' : 'wallet-outline'}
      size={size}
      iconFamily="MaterialCommunityIcons"
      color={color}
    />
  );
};
