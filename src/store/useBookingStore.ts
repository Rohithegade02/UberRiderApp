import { DistanceInfo } from '../screens/BookingScreen/types';
import { create } from 'zustand';

// Ride State Enum
export enum RideState {
  IDLE,
  SELECTING_DESTINATION,
  SELECTING_VEHICLE,
  CONFIRMING_PICKUP,
  RIDE_STARTED,
  RIDE_COMPLETED,
}

interface BookingStore {
  vehicleType: string;
  rideState: RideState;
  currentLocation: string;
  destinationLocation: string;
  pickupLocation: string;
  vehicleLocation: string;
  distanceInfo: DistanceInfo | null;

  setVehicleType: (vehicleType: string) => void;
  setRideState: (state: RideState) => void;
  setDistanceInfo: (distanceInfo: DistanceInfo | null) => void;
  setCurrentLocation: (location: string) => void;
  setDestinationLocation: (location: string) => void;
}

export const useBookingStore = create<BookingStore>(set => ({
  vehicleType: '',
  rideState: RideState.SELECTING_DESTINATION,
  currentLocation: '',
  destinationLocation: '',
  pickupLocation: '',
  distanceInfo: null,
  vehicleLocation: '',
  setVehicleType: vehicleType => set({ vehicleType }),
  setRideState: rideState => set({ rideState }),
  setDistanceInfo: distanceInfo => set({ distanceInfo }),
  setCurrentLocation: currentLocation => set({ currentLocation }),
  setDestinationLocation: destinationLocation => set({ destinationLocation }),
}));

interface RouteCoordinatesStore {
  currentLocationCords: {
    latitude: number;
    longitude: number;
  } | null;
  destinationLocationCords: {
    latitude: number;
    longitude: number;
  } | null;
  pickupLocationCords: {
    latitude: number;
    longitude: number;
  } | null;
  routeCoordinates: any[];
  vehicleLocationCords: {
    latitude: number;
    longitude: number;
  } | null;
  setCurrentLocationCords: (location: {
    latitude: number;
    longitude: number;
  }) => void;
  setDestinationLocationCords: (location: {
    latitude: number;
    longitude: number;
  }) => void;
  setPickupLocationCords: (location: {
    latitude: number;
    longitude: number;
  }) => void;
  setRouteCoordinates: (routeCoordinates: any[]) => void;
  setVehicleLocationCords: (location: {
    latitude: number;
    longitude: number;
  }) => void;
}

export const useRouteCoordinatesStore = create<RouteCoordinatesStore>(set => ({
  currentLocationCords: null,
  destinationLocationCords: null,
  pickupLocationCords: null,
  routeCoordinates: [],
  vehicleLocationCords: null,
  setVehicleLocationCords: vehicleLocationCords =>
    set({ vehicleLocationCords }),
  setRouteCoordinates: routeCoordinates => set({ routeCoordinates }),
  setCurrentLocationCords: currentLocationCords =>
    set({ currentLocationCords }),
  setDestinationLocationCords: destinationLocationCords =>
    set({ destinationLocationCords }),
  setPickupLocationCords: pickupLocationCords => set({ pickupLocationCords }),
}));

export interface RouteDetailsStore {
  pickupAddress: string;
  setPickupAddress: (address: string) => void;
  setDestinationInput: (destinationInput: string) => void;
  destinationInput: string;
}

export const useRouteDetailsStore = create<RouteDetailsStore>(set => ({
  pickupAddress: '',
  setPickupAddress: pickupAddress => set({ pickupAddress }),
  destinationInput: '',
  setDestinationInput: destinationInput => set({ destinationInput }),
}));
