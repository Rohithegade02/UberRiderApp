import BottomSheet from '@gorhom/bottom-sheet';
import { ImageProps, StyleProp, TextStyle } from 'react-native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
} from 'react-native-google-places-autocomplete';

// Custom Input Props
export interface CustomInputProps {
  textInputMaxLength?: number;
  placeholderTextStyle?: StyleProp<TextStyle>;
}

// Ride State Enum
export enum RideState {
  IDLE,
  SELECTING_DESTINATION,
  SELECTING_VEHICLE,
  CONFIRMING_PICKUP,
  RIDE_STARTED,
  RIDE_COMPLETED,
}

export interface DistanceInfo {
  distance: string;
  duration: string;
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
  pickupLocationCords?: {
    latitude: number;
    longitude: number;
  } | null;
  vehicleLocationCords?: {
    latitude: number;
    longitude: number;
  } | null;
  handleBackPress: () => void;

  // New props for custom autocomplete
  destinationInput: string;
  handleDestinationInputChange: (text: string) => void;
  predictions: GooglePlaceData[];
  handlePredictionPress: (place: GooglePlaceData) => void;
  routeCoordinates?: any;
  vehicleType?: string;
  setVehicleType: (vehicleType: string) => void;
  bottomSheetRef?: React.RefObject<BottomSheet> | null;
  rideState: RideState;
  setRideState: (rideState: RideState) => void;
  distanceInfo?: DistanceInfo | null;
  // Callback when user sets pickup location by moving the pin
  onPickupLocationSet?: (coords: {
    latitude: number;
    longitude: number;
  }) => void;
  // Address string for the currently selected pickup location
  pickupAddress?: string;
  // index of the last reached point on route for trimming polyline
  routeProgressIndex?: number;
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

export interface SearchedResultProps {
  item: GooglePlaceData;
  handlePredictionPress: (place: GooglePlaceData) => void;
}
export interface DestionationSelectionProps {
  handlePinLocation: () => void;
}
export interface VehicleSelectionSheetProps {
  handleBackPress: () => void;
  vehicleType: string;
  setVehicleType: (vehicleType: string) => void;
  bottomSheetRef: React.RefObject<BottomSheet> | null;
  rideState: RideState;
  setRideState: (rideState: RideState) => void;
  distanceInfo: DistanceInfo | null;
}
export interface VehicleSelectionCardProps {
  vehicleName: string;
  vehicleImage: ImageProps;
  vehiclePrice: string;
  vehicleDropOffTime: string;
  onPress: () => void;
  vehicleType: string;
  distance?: string;
  duration?: string;
}

export interface ConfirmationSheetProps {
  handleBackPress: () => void;
  onConfirm: () => void;
  pickupAddress: string;
}
