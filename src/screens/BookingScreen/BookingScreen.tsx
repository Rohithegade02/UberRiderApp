import { View } from 'react-native';
import React from 'react';
import RideSheet from './components/RideSheet';
import ConfirmationSheet from './components/ConfirmationSheet';
import { styles } from './styles';
import { BookingScreenProps, RideState } from './types';
import RideCompletedModal from './components/RideCompletedModal';
import { VehicleSelectionSheet } from './components/VehicleSelectionSheet';
import { MapViewComponent } from './components/MapViewComponent';

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
  isRideCompletedModalVisible,
  handleRideCompletedModalDismiss,
  handlePayAndSaveRide,
  mapRegion,
}: BookingScreenProps) => {
  return (
    <View style={styles.container}>
      {/* Map View */}
      {mapRegion && (
        <MapViewComponent
          mapRegion={mapRegion}
          routeCoordinates={routeCoordinates}
          routeProgressIndex={routeProgressIndex}
          rideState={rideState}
          vehicleLocationCords={vehicleLocationCords}
          currentLocationCords={currentLocationCords}
          destinationLocationCords={destinationLocationCords}
          pickupLocationCords={pickupLocationCords}
          onPickupLocationSet={onPickupLocationSet}
          onConfirmRide={onConfirmRide}
        />
      )}

      {/* Ride Started Sheet */}
      {rideState === RideState.SELECTING_DESTINATION && (
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

      {/* Vehicle Selection Sheet */}
      {rideState === RideState.SELECTING_VEHICLE && (
        <VehicleSelectionSheet
          handleBackPress={handleBackPress}
          vehicleType={vehicleType!}
          setVehicleType={setVehicleType}
          rideState={rideState}
          setRideState={setRideState}
          distanceInfo={distanceInfo as any}
        />
      )}
      {/* Confirmation Sheet */}
      {rideState === RideState.CONFIRMING_PICKUP && (
        <ConfirmationSheet
          handleBackPress={handleBackPress}
          onConfirm={onConfirmRide}
          pickupAddress={pickupLocationCords?.address}
        />
      )}

      {/* Ride Completed Modal */}
      {rideState === RideState.RIDE_COMPLETED && (
        <RideCompletedModal
          visible={isRideCompletedModalVisible!}
          onDismiss={handleRideCompletedModalDismiss!}
          handlePayAndSaveRide={handlePayAndSaveRide}
        />
      )}
    </View>
  );
};
