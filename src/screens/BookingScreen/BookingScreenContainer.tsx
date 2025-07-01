import React, { useCallback, useEffect, useState } from 'react';
import { BookingScreen } from './BookingScreen';
import { goBack } from '../../navigation/NavigationUtil';
import Geolocation from '@react-native-community/geolocation';
import { GOOGLE_MAP_API_KEY } from '../../constants';
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
} from '../../services';

// Booking Screen Container Component
export const BookingScreenContainer = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [currentLocationCords, setCurrentLocationCords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [destinationLocationCords, setDestinationLocationCords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<any>([]);

  // New state for custom autocomplete
  const [destinationInput, setDestinationInput] = useState('');
  const [predictions, setPredictions] = useState<GooglePlaceData[]>([]);

  const handleBackPress = useCallback(() => {
    goBack();
  }, []);

  const handleDestinationInputChange = async (text: string) => {
    setDestinationInput(text);
    if (text.length > 2) {
      try {
        const data = await fetchAutocomplete(text);
        if (data && data.predictions) {
          setPredictions(data.predictions);
        }
      } catch (error) {
        console.error('Error fetching predictions:', error);
        setPredictions([]);
      }
    } else {
      setPredictions([]);
    }
  };

  const handlePredictionPress = useCallback(async (place: GooglePlaceData) => {
    try {
      const data = await fetchPlaceDetails(place.place_id);
      if (data && data.result && data.result.geometry) {
        const { lat, lng } = data.result.geometry.location;
        setDestinationLocationCords({ latitude: lat, longitude: lng });
        setDestinationLocation(place.description);
        setDestinationInput(place.description);
        setPredictions([]);
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  }, []);

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
    [],
  );

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
  }, [getAddressFromCords]);

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

  // Fetch route when both locations are available
  useEffect(() => {
    if (
      currentLocationCords &&
      destinationLocationCords &&
      GOOGLE_MAP_API_KEY
    ) {
      getDirections().then(coordinates => {
        if (coordinates) {
          setRouteCoordinates(coordinates);
        }
      });
    }
  }, [currentLocationCords, destinationLocationCords, getDirections]);

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
      setVehicleType={setVehicleType}
    />
  );
};
