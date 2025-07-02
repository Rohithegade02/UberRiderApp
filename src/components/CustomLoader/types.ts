import { StyleProp, ViewStyle } from 'react-native';

export interface CustomLoaderProps {
  /** Width of the loader */
  width?: number | string;
  /** Height of the loader */
  height?: number | string;
  /** Animation speed */
  speed?: number;
  /** Background color of the loader */
  backgroundColor?: string;
  /** Foreground color of the loader */
  foregroundColor?: string;
  /** Custom style for the loader container */
  style?: StyleProp<ViewStyle>;
  /** Custom viewBox for the SVG */
  viewBox?: string;
  /** Children elements for custom loader shapes */
  children?: React.ReactNode;
  /** Any other props from IContentLoaderProps */
  [key: string]: any;
}
