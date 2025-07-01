import { Text, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
// Booking  Presentation Screen Component
export const BookingScreen = () => {
  return (
    <View>
      <MapView
        tintColor="black"
        mapType="mutedStandard"
        // showsPointsOfInterest={false}
        showsUserLocation={true}
        // initialRegion={region}
        userInterfaceStyle="light"
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};
