import React, { useState, useEffect, Fragment } from 'react';
import { Polyline } from 'react-native-maps';
import { Colors } from '../constants';

type Coordinate = {
  latitude: number;
  longitude: number;
};

// Animated Polyline Component
export const AnimatingPolylineComponent = ({
  Direction,
}: {
  Direction: Coordinate[];
}) => {
  const [polylinePath, setPolylinePath] = useState<Coordinate[]>([]);

  useEffect(() => {
    let interval: any;

    if (Direction && Direction.length > 0) {
      setPolylinePath([]);
      interval = setInterval(() => {
        setPolylinePath(prevPath => {
          if (prevPath.length < Direction.length) {
            return [...Direction.slice(0, prevPath.length + 1)];
          } else {
            // Reset animation to start over
            return [];
          }
        });
      }, 70);
    }
    //unmount the interval
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [Direction]);

  return (
    <Fragment>
      {polylinePath.length > 0 && (
        <Polyline
          coordinates={polylinePath}
          strokeColor={Colors.otpInputBackground}
          strokeWidth={5}
        />
      )}
    </Fragment>
  );
};
