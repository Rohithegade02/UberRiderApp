import { View } from 'react-native';
import React from 'react';
import MapView, { Circle, Polyline, Marker, LatLng } from 'react-native-maps';
import RideSheet from './components/RideSheet';
import ConfirmationSheet from './components/ConfirmationSheet';
import { styles } from './styles';
import { BookingScreenProps, RideState } from './types';
import { Colors } from '../../constants';
import { AnimatingPolylineComponent } from '../../utils/animatePolyline';
import RideCompletedModal from './components/RideCompletedModal';

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
  distanceInfo,
  onConfirmRide,
  onPickupLocationSet,
  pickupLocationCords,
  vehicleLocationCords,
  routeProgressIndex,
}: BookingScreenProps) => {
  console.log('rideState', rideState);

  // Center the map on the user's current location
  const mapRegion = currentLocationCords
    ? {
        latitude: currentLocationCords.latitude,
        longitude: currentLocationCords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : undefined;

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
        cacheEnabled
        initialRegion={mapRegion}
      >
        {/* Static Polyline (background) */}
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates.slice(routeProgressIndex)}
            strokeColor={Colors.markerGray}
            strokeWidth={5}
          />
        )}

        {/* Animated Polyline */}
        {routeCoordinates.length > 0 && (
          <AnimatingPolylineComponent
            Direction={routeCoordinates.slice(routeProgressIndex)}
          />
        )}
        {/* Moving vehicle circle when ride started */}
        {rideState === RideState.RIDE_STARTED && vehicleLocationCords && (
          <Circle
            center={vehicleLocationCords}
            radius={50}
            strokeColor={Colors.markerGreen}
            strokeWidth={5}
            fillColor={Colors.markerDarkGreen}
            zIndex={2}
          />
        )}
        {/* Current Location Marker */}
        {rideState !== RideState.RIDE_STARTED && currentLocationCords && (
          <Circle
            center={currentLocationCords}
            radius={50}
            strokeColor={Colors.markerGray}
            strokeWidth={5}
            fillColor={Colors.white}
            zIndex={1}
          />
        )}

        {/* Destination Location Marker */}
        {destinationLocationCords && (
          <Circle
            center={destinationLocationCords}
            radius={50}
            strokeColor={Colors.markerGray}
            strokeWidth={5}
            fillColor={Colors.white}
            zIndex={1}
          />
        )}

        {/* Draggable pickup pin in confirm-pickup state */}
        {rideState === RideState.CONFIRMING_PICKUP && (
          <Marker
            coordinate={pickupLocationCords ?? (currentLocationCords as LatLng)}
            draggable
            onDragEnd={e => onPickupLocationSet?.(e.nativeEvent.coordinate)}
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

      {rideState === RideState.CONFIRMING_PICKUP ? (
        <ConfirmationSheet
          handleBackPress={handleBackPress}
          onConfirm={onConfirmRide}
          pickupAddress={pickupLocationCords?.address}
        />
      ) : (
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
          distanceInfo={distanceInfo}
        />
      )}
      <RideCompletedModal
        visible={rideState === RideState.RIDE_COMPLETED}
        onDismiss={handleBackPress}
      />
    </View>
  );
};
