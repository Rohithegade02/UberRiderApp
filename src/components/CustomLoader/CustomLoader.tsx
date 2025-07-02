import React, { memo } from 'react';
import ContentLoader from 'react-content-loader/native';
import { View } from 'react-native';
import { styles } from './styles';
import { CustomLoaderProps } from './types';
import { Colors } from '../../constants';

export const CustomLoader: React.FC<CustomLoaderProps> = memo(
  ({
    width = '100%',
    height = 100,
    speed = 1.5,
    backgroundColor = Colors.textgray,
    foregroundColor = Colors.whereToInputLabel,
    style,
    viewBox,
    children,
    ...props
  }) => {
    return (
      <View style={[styles.container, style]}>
        <ContentLoader
          width={width}
          height={height}
          speed={speed}
          backgroundColor={backgroundColor}
          foregroundColor={foregroundColor}
          viewBox={viewBox || `0 0 ${width} ${height}`}
          {...props}
        >
          {children}
        </ContentLoader>
      </View>
    );
  },
);
