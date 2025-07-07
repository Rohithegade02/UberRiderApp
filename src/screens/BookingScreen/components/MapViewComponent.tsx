import MapView from 'react-native-maps';
import { Polyline } from 'react-native-maps';
import { Circle } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { LatLng } from 'react-native-maps';
import { RideState } from '../types';
import { Colors } from '../../../constants';
import { styles } from '../styles';
import { MapViewComponentProps } from '../types';
import { AnimatingPolylineComponent } from '../../../utils/animatePolyline';

export const MapViewComponent = ({
  mapRegion,
  routeCoordinates,
  routeProgressIndex,
  rideState,
  vehicleLocationCords,
  currentLocationCords,
  destinationLocationCords,
  pickupLocationCords,
  onPickupLocationSet,
}: MapViewComponentProps) => {
  return (
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
  );
};
