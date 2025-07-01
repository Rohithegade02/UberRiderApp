import { StyleProp, TextStyle } from 'react-native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';

// Custom Input Props
export interface CustomInputProps {
  textInputMaxLength?: number;
  placeholderTextStyle?: StyleProp<TextStyle>;
}

// Booking Screen Props
export interface BookingScreenProps {
  currentLocation?: string;
  destinationLocation?: string;
  setCurrentLocation: (location: string) => void;
  setDestinationLocation: (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null,
  ) => void;
  currentLocationCords?: {
    latitude: number;
    longitude: number;
  } | null;
  destinationLocationCords?: {
    latitude: number;
    longitude: number;
  } | null;
  handleBackPress: () => void;
  googleApiKey: string;

  // New props for custom autocomplete
  destinationInput: string;
  handleDestinationInputChange: (text: string) => void;
  predictions: GooglePlaceData[];
  handlePredictionPress: (place: GooglePlaceData) => void;
  routeCoordinates?: any;
}

//Rider Input Props
export interface RiderInputProps {
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
  setDestinationLocation: (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null,
  ) => void;
  googleApiKey: string;

  // New props for custom autocomplete
  destinationInput: string;
  handleDestinationInputChange: (text: string) => void;
  predictions: GooglePlaceData[];
  handlePredictionPress: (place: GooglePlaceData) => void;
}
