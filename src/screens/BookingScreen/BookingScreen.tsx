import { View } from 'react-native';
import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import RideSheet from './RideSheet';
import { styles } from './styles';
import { BookingScreenProps } from './types';
import { Colors } from '../../constants';

// Booking  Presentation Screen Component
export const BookingScreen = ({
  currentLocation,
  destinationLocation,
  setCurrentLocation,
  setDestinationLocation,
  handleBackPress,
  currentLocationCords,
  destinationLocationCords,
  destinationInput,
  handleDestinationInputChange,
  predictions,
  handlePredictionPress,
  routeCoordinates,
}: BookingScreenProps) => {
  console.log(currentLocationCords);
  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        tintColor="black"
        mapType="mutedStandard"
        showsUserLocation={true}
        followsUserLocation
        userInterfaceStyle="dark"
        style={styles.map}
      >
        {/* Markers */}
        {currentLocationCords && <Marker coordinate={currentLocationCords} />}
        {destinationLocationCords && (
          <Marker
            coordinate={destinationLocationCords}
            pinColor={Colors.active}
          />
        )}
        {/* Polylines */}
        {routeCoordinates.length > 0 ? (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor={Colors.markerRed}
            strokeWidth={6}
          />
        ) : (
          currentLocationCords &&
          destinationLocationCords && (
            <Polyline
              coordinates={[currentLocationCords, destinationLocationCords]}
              strokeColor={Colors.markerRed}
              strokeWidth={6}
              lineDashPattern={[5, 5]} // Dashed line to indicate it's not the actual route
            />
          )
        )}
      </MapView>
      {/* Ride Bottom Sheet */}
      <RideSheet
        currentLocation={currentLocation}
        destinationLocation={destinationLocation}
        setCurrentLocation={setCurrentLocation}
        setDestinationLocation={setDestinationLocation}
        handleBackPress={handleBackPress}
        destinationInput={destinationInput}
        handleDestinationInputChange={handleDestinationInputChange}
        predictions={predictions}
        handlePredictionPress={handlePredictionPress}
      />
    </View>
  );
};
