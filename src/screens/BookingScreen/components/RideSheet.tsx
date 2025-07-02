import React, { memo, useCallback, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from '../styles';
import { Colors } from '../../../constants';
import { CustomIcon } from '../../../components/CustomIcon';
import { BookingScreenProps } from '../types';
import { BookingScreenText } from '../constants';
import { VehicleSelectionSheet } from './VehicleSelectionSheet';
import { RidePlanSheet } from './RidePlanSheet';
import { DestionationSelectionSheet } from './DestionationSelectionSheet';

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

  // Add this for position tracking

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    setCurrentSnapIndex(index);
  }, []);

  // state to track current snap point
  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);

  // Function to get title based on snap point
  const getTitle = () => {
    switch (currentSnapIndex) {
      case 0: // 30% snap point
        return '';
      case 1: // 60% snap point (destination selection)
        return BookingScreenText.setDestionation;
      case 2: // 100% snap point (ride plan / vehicle selection)
        return BookingScreenText.planYourRide;
      default:
        return '';
    }
  };

  const handlePinLocation = useCallback(() => {
    // move to 2nd snap index
    bottomSheetRef.current?.snapToIndex(2);
  }, []);

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
        {currentLocationCords && destinationLocationCords ? (
          <VehicleSelectionSheet
            handleBackPress={handleBackPress}
            vehicleType={vehicleType!}
            setVehicleType={setVehicleType}
            bottomSheetRef={bottomSheetRef as any}
            rideState={rideState}
            setRideState={setRideState}
            distanceInfo={distanceInfo as any}
          />
        ) : (
          <>
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
            {currentSnapIndex === 1 && (
              <View>
                <DestionationSelectionSheet
                  handlePinLocation={handlePinLocation}
                />
              </View>
            )}
            {currentSnapIndex === 2 && (
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
            )}
          </>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default memo(RideSheet);
