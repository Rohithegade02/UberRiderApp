import { View } from 'react-native';
import React from 'react';
import MapView, { Circle, Polyline } from 'react-native-maps';
import RideSheet from './RideSheet';
import { styles } from './styles';
import { BookingScreenProps } from './types';
import { Colors } from '../../constants';
import { AnimatingPolylineComponent } from '../../utils/animatePolyline';

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
  vehicleType,
  setVehicleType,
  rideState,
  setRideState,
}: BookingScreenProps) => {
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
        {/* Static Polyline (background) */}
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#666"
            strokeWidth={5}
          />
        )}

        {/* Animated Polyline */}
        {routeCoordinates.length > 0 && (
          <AnimatingPolylineComponent Direction={routeCoordinates} />
        )}

        {/* Current Location Marker */}
        {currentLocationCords && (
          <Circle
            center={currentLocationCords}
            radius={50}
            strokeColor="#484848"
            strokeWidth={5}
            fillColor="#fff"
            zIndex={1}
          />
        )}

        {/* Destination Location Marker */}
        {destinationLocationCords && (
          <Circle
            center={destinationLocationCords}
            radius={50}
            strokeColor="#484848"
            strokeWidth={5}
            fillColor="#fff"
            zIndex={1}
          />
        )}

        {/* Fallback Polyline when no route coordinates */}
        {routeCoordinates.length === 0 &&
          currentLocationCords &&
          destinationLocationCords && (
            <Polyline
              coordinates={[currentLocationCords, destinationLocationCords]}
              strokeColor={Colors.markerRed}
              strokeWidth={6}
              lineDashPattern={[5, 5]}
            />
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
        currentLocationCords={currentLocationCords}
        destinationLocationCords={destinationLocationCords}
        vehicleType={vehicleType}
        setVehicleType={setVehicleType}
        rideState={rideState}
        setRideState={setRideState}
      />
    </View>
  );
};
