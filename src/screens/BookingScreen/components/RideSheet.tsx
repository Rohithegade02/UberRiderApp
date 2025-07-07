import React, { memo, useCallback, useRef, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { styles } from '../styles';
import { CustomIcon } from '../../../components/CustomIcon';
import { BookingScreenProps, RideState } from '../types';
import { BookingScreenText } from '../constants';
import { RidePlanSheet } from './RidePlanSheet';
import { DestionationSelectionSheet } from './DestionationSelectionSheet';
import { Colors } from '../../../constants';

const RideSheet = ({
  currentLocation,
  destinationLocation,
  setCurrentLocation,
  setDestinationLocation,
  handleBackPress,
  destinationInput,
  handleDestinationInputChange,
  predictions,
  handlePredictionPress,
  currentLocationCords,
  destinationLocationCords,
  vehicleType,
  setVehicleType,
  rideState,
  setRideState,
  distanceInfo,
}: BookingScreenProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet | null>(null);

  // state to track current snap point
  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);

  // Animated values for opacity
  const destinationSheetOpacity = useSharedValue(0);
  const ridePlanSheetOpacity = useSharedValue(0);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    setCurrentSnapIndex(index);
  }, []);

  // Animation functions
  const animateDestinationSheetIn = useCallback(() => {
    destinationSheetOpacity.value = withTiming(1, { duration: 500 });
  }, [destinationSheetOpacity]);

  const animateDestinationSheetOut = useCallback(() => {
    destinationSheetOpacity.value = withTiming(0, { duration: 500 });
  }, [destinationSheetOpacity]);

  const animateRidePlanSheetIn = useCallback(() => {
    ridePlanSheetOpacity.value = withTiming(1, { duration: 500 });
  }, [ridePlanSheetOpacity]);

  const animateRidePlanSheetOut = useCallback(() => {
    ridePlanSheetOpacity.value = withTiming(0, { duration: 500 });
  }, [ridePlanSheetOpacity]);

  // Handle animations based on snap index changes
  useEffect(() => {
    if (currentSnapIndex === 1) {
      // Animate destination sheet in, ride plan sheet out
      animateDestinationSheetIn();
      animateRidePlanSheetOut();
    } else if (currentSnapIndex === 2) {
      // Animate ride plan sheet in, destination sheet out
      animateRidePlanSheetIn();
      animateDestinationSheetOut();
    } else {
      // Hide both when at index 0
      animateDestinationSheetOut();
      animateRidePlanSheetOut();
    }
  }, [
    currentSnapIndex,
    animateDestinationSheetIn,
    animateDestinationSheetOut,
    animateRidePlanSheetIn,
    animateRidePlanSheetOut,
  ]);

  // Function to get title based on snap point
  const getTitle = () => {
    switch (currentSnapIndex) {
      case 0: // 35% snap point
        return '';
      case 1: // 50% snap point (destination selection)
        return BookingScreenText.setDestionation;
      case 2: // 100% snap point (ride plan / vehicle selection)
        return BookingScreenText.planYourRide;
      default:
        return '';
    }
  };

  const handlePinLocation = useCallback(() => {
    // move to 2nd snap index (100%)
    bottomSheetRef.current?.snapToIndex(2);
  }, []);

  // Animated styles - only opacity
  const destinationSheetAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: destinationSheetOpacity.value,
    };
  });

  const ridePlanSheetAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: ridePlanSheetOpacity.value,
    };
  });
  // Hide sheet once vehicle selection starts, ride starts or is completed
  if (
    rideState === RideState.SELECTING_VEHICLE ||
    rideState === RideState.CONFIRMING_PICKUP ||
    rideState === RideState.RIDE_STARTED ||
    rideState === RideState.RIDE_COMPLETED
  ) {
    return null;
  }

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['35%', '100%']}
      onChange={handleSheetChanges}
      index={currentLocationCords && destinationLocationCords ? 1 : 2}
      enablePanDownToClose={false}
      backgroundStyle={{ backgroundColor: Colors.lightBlack }}
      handleIndicatorStyle={styles.handleIndicatorStyle}
    >
      <BottomSheetView style={styles.bottomSheetContentContainer}>
        {currentSnapIndex !== 0 && (
          <View style={styles.bottomSheetHeaderContainer}>
            <CustomIcon
              name="arrow-back"
              size={24}
              color={Colors.textwhite}
              iconFamily="Ionicons"
              onPress={handleBackPress}
            />
            <Text style={styles.bottomSheetTitle}>{getTitle()}</Text>
            <View />
          </View>
        )}

        {/* Animated Destination Selection Sheet */}
        {currentSnapIndex === 1 && (
          <Animated.View style={[destinationSheetAnimatedStyle]}>
            <DestionationSelectionSheet handlePinLocation={handlePinLocation} />
          </Animated.View>
        )}

        {/* Animated Ride Plan Sheet */}
        {currentSnapIndex === 2 && (
          <Animated.View style={[ridePlanSheetAnimatedStyle]}>
            <RidePlanSheet
              currentLocation={currentLocation}
              destinationLocation={destinationLocation}
              setCurrentLocation={setCurrentLocation}
              setDestinationLocation={setDestinationLocation}
              handleBackPress={handleBackPress}
              destinationInput={destinationInput}
              handleDestinationInputChange={handleDestinationInputChange}
              predictions={predictions}
              handlePredictionPress={handlePredictionPress}
              setVehicleType={setVehicleType}
              vehicleType={vehicleType}
              bottomSheetRef={bottomSheetRef as any}
              rideState={rideState}
              setRideState={setRideState}
              distanceInfo={distanceInfo}
            />
          </Animated.View>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default memo(RideSheet);
