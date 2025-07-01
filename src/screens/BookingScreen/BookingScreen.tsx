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
  googleApiKey,
  destinationInput,
  handleDestinationInputChange,
  predictions,
  handlePredictionPress,
  routeCoordinates,
}: BookingScreenProps) => {
  console.log(currentLocationCords);
  return (
    <View style={styles.container}>
      <MapView
        tintColor="black"
        mapType="mutedStandard"
        showsUserLocation={true}
        followsUserLocation
        userInterfaceStyle="dark"
        style={styles.map}
      >
        {currentLocationCords && <Marker coordinate={currentLocationCords} />}
        {destinationLocationCords && (
          <Marker
            coordinate={destinationLocationCords}
            pinColor={Colors.active}
          />
        )}
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
      <RideSheet
        currentLocation={currentLocation}
        destinationLocation={destinationLocation}
        setCurrentLocation={setCurrentLocation}
        setDestinationLocation={setDestinationLocation}
        handleBackPress={handleBackPress}
        googleApiKey={googleApiKey}
        destinationInput={destinationInput}
        handleDestinationInputChange={handleDestinationInputChange}
        predictions={predictions}
        handlePredictionPress={handlePredictionPress}
      />
    </View>
  );
};
