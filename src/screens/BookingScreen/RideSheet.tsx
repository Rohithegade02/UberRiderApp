import React, { memo, useCallback, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Colors } from '../../constants';
import { CustomIcon } from '../../components/CustomIcon';
import { CustomDropDown } from '../../components/CustomDropDown';
import { BookingScreenProps, DestionationSelectionProps } from './types';
import RiderInput from './RiderInput';
import { BookingScreenText } from './constants';
import { CustomButton } from '../../components/CustomButton';
import { VehicleSelectionSheet } from './VehicleSelectionSheet';

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
  const bottomSheetRef = useRef<BottomSheet>(null);

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
      // Added middle snap-point so indices 0-2 are valid
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
            bottomSheetRef={bottomSheetRef}
            rideState={rideState}
            setRideState={setRideState}
            distanceInfo={distanceInfo}
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
                <DestionationSelection handlePinLocation={handlePinLocation} />
              </View>
            )}
            {currentSnapIndex === 2 && (
              <RidePlan
                currentLocation={currentLocation}
                destinationLocation={destinationLocation}
                setCurrentLocation={setCurrentLocation}
                setDestinationLocation={setDestinationLocation}
                handleBackPress={handleBackPress}
                destinationInput={destinationInput}
                handleDestinationInputChange={handleDestinationInputChange}
                predictions={predictions}
                handlePredictionPress={handlePredictionPress}
              />
            )}
          </>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

const DestionationSelection = ({
  handlePinLocation,
}: DestionationSelectionProps) => {
  return (
    <View style={styles.destinationSelectionContainer}>
      <Text style={styles.movePinText}>{BookingScreenText.movePin}</Text>
      <View style={styles.destinationDivider} />
      <CustomDropDown
        title={BookingScreenText.pinLocation}
        leftIcon={
          <CustomIcon
            name="logo-ionic"
            size={16}
            color={Colors.textwhite}
            iconFamily="Ionicons"
          />
        }
        rightIcon={
          <CustomIcon
            name="search"
            size={16}
            color={Colors.textwhite}
            iconFamily="Ionicons"
          />
        }
        onPress={handlePinLocation}
        styles={styles.destinationDropDown}
        textStyle={styles.destinationDropDownTextStyle}
      />

      <CustomButton
        buttonText={BookingScreenText.confirmDestionation}
        buttonStyle={styles.movePinButton}
        buttonTextStyle={styles.movePinButtonText}
        onPress={() => {}}
      />
    </View>
  );
};
const RidePlan = ({
  currentLocation,
  destinationLocation,
  setCurrentLocation,
  setDestinationLocation,
  handleBackPress,
  destinationInput,
  handleDestinationInputChange,
  predictions,
  handlePredictionPress,
}: BookingScreenProps) => {
  return (
    <View style={styles.bottomSheet100Container}>
      <View style={styles.dropDownMainContainer}>
        <CustomDropDown
          title={BookingScreenText.pickupNow}
          leftIcon={
            <CustomIcon
              name="timer-outline"
              size={24}
              color={Colors.textwhite}
              iconFamily="Ionicons"
            />
          }
          onPress={() => {}}
          styles={styles.dropDownContainer}
          textStyle={styles.dropDownTextStyle}
        />
        <CustomDropDown
          title="For me"
          leftIcon={
            <CustomIcon
              name="timer-outline"
              size={24}
              color={Colors.textwhite}
              iconFamily="Ionicons"
            />
          }
          onPress={() => {}}
          styles={styles.dropDownContainer}
          textStyle={styles.dropDownTextStyle}
        />
      </View>
      <View style={styles.riderInputMainContainer}>
        <RiderInput
          currentLocation={currentLocation}
          destinationLocation={destinationLocation}
          setCurrentLocation={setCurrentLocation}
          setDestinationLocation={setDestinationLocation}
          handleBackPress={handleBackPress}
          destinationInput={destinationInput}
          handleDestinationInputChange={handleDestinationInputChange}
          predictions={predictions}
          handlePredictionPress={handlePredictionPress}
        />
      </View>
    </View>
  );
};

export default memo(RideSheet);
