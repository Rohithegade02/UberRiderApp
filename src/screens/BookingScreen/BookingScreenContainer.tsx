import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { BookingScreen } from './BookingScreen';
import { goBack, navigate } from '../../navigation/NavigationUtil';
import Geolocation from '@react-native-community/geolocation';
import { decodePolyline } from '../../utils/decodePolyline';
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';
import {
  fetchPlaceDetails,
  fetchAutocomplete,
  fetchGeocode,
  fetchDirections,
  fetchDistanceMatrix,
} from '../../services';
import { RideState } from './types';
import { AnimatedRegion } from 'react-native-maps';
import {
  useBookingStore,
  useRouteCoordinatesStore,
  useRouteDetailsStore,
} from '../../store';
import { STACK_ROUTES, TAB_ROUTES } from '../../routes';
import { saveRideDetails } from '../../services/firebaseFirestore';

// Booking Screen Container Component
export const BookingScreenContainer = () => {
  //#region STORE HOOKS
  const {
    currentLocation,
    setCurrentLocation,
    destinationLocation,
    setDestinationLocation,
    distanceInfo,
    setDistanceInfo,
    vehicleType,
    setVehicleType,
    rideState,
    setRideState,
  } = useBookingStore();

  const {
    currentLocationCords,
    setCurrentLocationCords,
    destinationLocationCords,
    setDestinationLocationCords,
    routeCoordinates,
    setRouteCoordinates,
    pickupLocationCords,
    setPickupLocationCords,
    vehicleLocationCords,
    setVehicleLocationCords,
  } = useRouteCoordinatesStore();

  const {
    pickupAddress,
    setPickupAddress,
    destinationInput,
    setDestinationInput,
  } = useRouteDetailsStore();
  //#endregion

  //#region LOCAL STATE
  // State for route progress index
  const [routeProgressIndex, setRouteProgressIndex] = useState(0);

  // State for predictions
  const [predictions, setPredictions] = useState<GooglePlaceData[]>([]);

  // State for ride completed modal visibility
  const [isRideCompletedModalVisible, setIsRideCompletedModalVisible] =
    useState(false);

  // Simulated ride movement
  const simulationIndexRef = useRef(0);
  const simulationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  //#endregion

  //#region MAP REGION
  // Center the map on the user's current location
  const mapRegion = currentLocationCords
    ? {
        latitude: currentLocationCords.latitude,
        longitude: currentLocationCords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : undefined;

  // #endregion

  //#region RIDER STATUS : SELECTING_DESTINATION
  // Handle back press
  const handleBackPress = useCallback(() => {
    if (rideState === RideState.SELECTING_DESTINATION) {
      goBack();
    }
  }, [rideState]);

  // Debounced fetch autocomplete predictions
  const debouncedFetchPredictions = useDebounce(async (query: string) => {
    try {
      const data = await fetchAutocomplete(query);
      if (data?.predictions) {
        setPredictions(data.predictions);
      } else {
        setPredictions([]);
      }
    } catch (err) {
      console.error('Error fetching predictions:', err);
      setPredictions([]);
    }
  }, 300);

  // Handle destination input change
  const handleDestinationInputChange = (text: string) => {
    setDestinationInput(text);
    if (text.length > 2) {
      debouncedFetchPredictions(text);
    } else {
      setPredictions([]);
    }
  };

  const getAddressFromCords = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const data = await fetchGeocode(latitude, longitude);
        if (data && data.results && data.results.length > 0) {
          const address = data.results[0].formatted_address;
          setCurrentLocation(address);
        }
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    },
    [setCurrentLocation],
  );
  // Get current location
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocationCords({ latitude, longitude });
        getAddressFromCords(latitude, longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, [getAddressFromCords, setCurrentLocationCords]);

  // Handle set destination
  const handleSetDestination = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null,
  ) => {
    if (details) {
      const { lat, lng } = details.geometry.location;
      setDestinationLocationCords({ latitude: lat, longitude: lng });
    }
    setDestinationLocation(data.description);
  };
  // Function to get route from Google Directions API
  const getDirections = useCallback(async () => {
    if (!currentLocationCords || !destinationLocationCords) return;

    try {
      const data = await fetchDirections(
        currentLocationCords,
        destinationLocationCords,
      );
      if (data && data.routes && data.routes.length > 0) {
        const points = decodePolyline(data.routes[0].overview_polyline.points);
        return points;
      }
    } catch (error) {
      console.error('Error fetching directions:', error);
      return [];
    }
  }, [currentLocationCords, destinationLocationCords]);

  // Fetch route when both locations are available
  useEffect(() => {
    if (currentLocationCords && destinationLocationCords) {
      getDirections().then(coordinates => {
        if (coordinates) {
          setRouteCoordinates(coordinates);
        }
      });
    }
  }, [
    currentLocationCords,
    destinationLocationCords,
    getDirections,
    setRouteCoordinates,
  ]);
  //#endregion

  //#region RIDER STATUS : SELECTING_VEHICLE
  // Calculate distance between current location and destination location
  const calculateDistance = useCallback(async () => {
    if (currentLocationCords && destinationLocationCords) {
      try {
        const result = await fetchDistanceMatrix(
          currentLocationCords,
          destinationLocationCords,
        );

        setDistanceInfo({
          distance: result.distance.text,
          duration: result.duration.text,
        });
      } catch (error) {
        console.error('Error calculating distance:', error);
        setDistanceInfo(null);
      }
    } else {
      setDistanceInfo(null);
    }
  }, [currentLocationCords, destinationLocationCords, setDistanceInfo]);

  // Calculate distance when coordinates change
  useEffect(() => {
    calculateDistance();
  }, [calculateDistance]);

  //#region RIDE STATUS : SELECTING_VEHICLE
  const handleVehicleSelect = useCallback(
    (type: string) => {
      setVehicleType(type);
      setRideState(RideState.CONFIRMING_PICKUP);

      // initialise pickup location with currentLocation
      if (currentLocationCords) {
        setPickupLocationCords(currentLocationCords);
        setPickupAddress(currentLocation);
      }
    },
    [
      currentLocation,
      currentLocationCords,
      setPickupAddress,
      setPickupLocationCords,
      setRideState,
      setVehicleType,
    ],
  );

  //#endregion

  // Handle updated pickup location from draggable pin
  const handlePickupLocationSet = useCallback(
    (coords: { latitude: number; longitude: number }) => {
      setPickupLocationCords(coords);
      // Update address for the pin location
      getAddressFromCords(coords.latitude, coords.longitude);
    },
    [getAddressFromCords, setPickupLocationCords],
  );

  const vehicleAnimatedRegion = useRef(
    new AnimatedRegion({
      latitude: pickupLocationCords?.latitude ?? 0,
      longitude: pickupLocationCords?.longitude ?? 0,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }),
  ).current;

  //#region RIDER STATUS : CONFIRMING_PICKUP

  // Handle prediction press
  const handlePredictionPress = useCallback(
    async (place: GooglePlaceData) => {
      try {
        const data = await fetchPlaceDetails(place.place_id);
        if (data && data.result && data.result.geometry) {
          const { lat, lng } = data.result.geometry.location;
          setDestinationLocationCords({ latitude: lat, longitude: lng });
          setDestinationLocation(place.description);
          setDestinationInput(place.description);
          // Add a small delay to ensure state updates are processed
          setTimeout(() => {
            console.log('Setting rideState to SELECTING_VEHICLE');
            setRideState(RideState.SELECTING_VEHICLE);

            // Log the state after a brief delay to see if it was set correctly
            setTimeout(() => {
              console.log('RideState should now be SELECTING_VEHICLE');
            }, 100);
          }, 100);
          console.log('rideState after destination select', rideState);
          setPredictions([]);
        }
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    },
    [
      setDestinationInput,
      setDestinationLocation,
      setDestinationLocationCords,
      setRideState,
      rideState,
    ],
  );

  //#endregion

  // stop simulated ride
  const stopSimulatedRide = useCallback(() => {
    if (simulationIntervalRef.current) {
      clearInterval(simulationIntervalRef.current);
      simulationIntervalRef.current = null;
    }
  }, []);

  const startSimulatedRide = useCallback(() => {
    stopSimulatedRide();
    simulationIndexRef.current = 0;

    if (routeCoordinates.length === 0) return;

    simulationIntervalRef.current = setInterval(() => {
      const idx = simulationIndexRef.current;
      if (idx >= routeCoordinates.length - 1) {
        // reached destination
        stopSimulatedRide();
        setRideState(RideState.RIDE_COMPLETED);
        return;
      }

      const nextCoord = routeCoordinates[idx];

      vehicleAnimatedRegion
        .timing({
          latitude: nextCoord.latitude,
          longitude: nextCoord.longitude,
          duration: 1000,
          useNativeDriver: false,
        })
        .start();

      setVehicleLocationCords({
        latitude: nextCoord.latitude,
        longitude: nextCoord.longitude,
      });

      setRouteProgressIndex(idx);

      simulationIndexRef.current += 1;
    }, 1500); // advance every 1.5s
  }, [
    routeCoordinates,
    stopSimulatedRide,
    vehicleAnimatedRegion,
    setRideState,
    setVehicleLocationCords,
  ]);

  // Handle confirm ride
  const handleConfirmRide = () => {
    setRideState(RideState.RIDE_STARTED);

    // Start simulated movement along route (useful when device is stationary / testing in emulator)
    startSimulatedRide();

    Geolocation.watchPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        const newCoord = { latitude, longitude };
        vehicleAnimatedRegion
          .timing({ ...newCoord, duration: 1000, useNativeDriver: false })
          .start();
        setVehicleLocationCords(newCoord);
      },
      err => console.log(err),
      { enableHighAccuracy: true, distanceFilter: 5, interval: 3000 },
    );
  };

  //#endregion

  // #region RIDER STATUS : RIDE_COMPLETED

  // Handle pay and save ride
  const handlePayAndSaveRide = async () => {
    const rideDetails = {
      pickup: pickupLocationCords,
      drop: destinationLocationCords,
      vehicleType,
      fare: (distanceInfo as any)?.fare ?? null,
      timestamp: new Date(),
    };
    const cleanRideDetails = Object.fromEntries(
      Object.entries(rideDetails).filter(([_, v]) => v !== undefined),
    );
    await saveRideDetails(cleanRideDetails);
    setIsRideCompletedModalVisible(false);
    setRideState(RideState.RIDE_COMPLETED);
    navigate(STACK_ROUTES.TabNavigator, { screen: TAB_ROUTES.Activity });
    // setDestinationInput('');
    // setDestinationLocation('');
    // setDestinationLocationCords({ latitude: 0, longitude: 0 });
  };

  // Ride completed modal visibility
  useEffect(() => {
    if (rideState === RideState.RIDE_COMPLETED) {
      setIsRideCompletedModalVisible(true);
    }
  }, [rideState]);

  // Ride completed modal dismiss
  const handleRideCompletedModalDismiss = () => {
    setIsRideCompletedModalVisible(false);
    navigate(STACK_ROUTES.TabNavigator, { screen: TAB_ROUTES.Activity });
  };
  // #endregion

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSimulatedRide();
    };
  }, [stopSimulatedRide]);

  return (
    <BookingScreen
      currentLocation={currentLocation}
      destinationLocation={destinationLocation}
      setCurrentLocation={setCurrentLocation}
      setDestinationLocation={handleSetDestination}
      currentLocationCords={currentLocationCords}
      destinationLocationCords={destinationLocationCords}
      handleBackPress={handleBackPress}
      // Pass new state and handlers for custom autocomplete
      destinationInput={destinationInput}
      handleDestinationInputChange={handleDestinationInputChange}
      predictions={predictions}
      handlePredictionPress={handlePredictionPress}
      routeCoordinates={routeCoordinates}
      vehicleType={vehicleType}
      setVehicleType={handleVehicleSelect}
      rideState={rideState}
      setRideState={setRideState}
      distanceInfo={distanceInfo}
      onPickupLocationSet={handlePickupLocationSet}
      pickupLocationCords={pickupLocationCords}
      pickupAddress={pickupAddress}
      vehicleAnimatedRegion={vehicleAnimatedRegion}
      vehicleLocationCords={vehicleLocationCords}
      routeProgressIndex={routeProgressIndex}
      handleConfirmRide={handleConfirmRide}
      onConfirmRide={handleConfirmRide}
      isRideCompletedModalVisible={isRideCompletedModalVisible}
      handleRideCompletedModalDismiss={handleRideCompletedModalDismiss}
      handlePayAndSaveRide={handlePayAndSaveRide}
      mapRegion={mapRegion}
    />
  );
};
