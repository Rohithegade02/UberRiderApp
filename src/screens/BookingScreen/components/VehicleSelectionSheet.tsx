import React, { memo, useCallback, useEffect, useRef } from 'react';
import { Image, Pressable, View, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from '../styles';
import { CustomIcon } from '../../../components/CustomIcon';
import { Colors, IMAGE } from '../../../constants';
import { BookingScreenText } from '../constants';
import {
  RideState,
  VehicleSelectionCardProps,
  VehicleSelectionSheetProps,
} from '../types';
import { CustomDropDown } from '../../../components/CustomDropDown';
import { CustomButton } from '../../../components/CustomButton';
import { useArrivalTime } from '../../../hooks/useArrivalTime';

export const VehicleSelectionSheet = ({
  handleBackPress,
  vehicleType,
  setVehicleType,
  setRideState,
  distanceInfo,
}: VehicleSelectionSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const { formattedTime, formattedDuration } = useArrivalTime(
    distanceInfo?.duration,
  );

  // Ensure the sheet is expanded when component mounts
  useEffect(() => {
    bottomSheetRef?.current?.snapToIndex(1);
  }, []);

  const handleCar = useCallback(() => {
    setVehicleType('Car');
    setRideState(RideState.CONFIRMING_PICKUP);
  }, [setRideState, setVehicleType]);

  const handleAuto = useCallback(() => {
    setVehicleType('Auto');
    setRideState(RideState.CONFIRMING_PICKUP);
  }, [setRideState, setVehicleType]);

  const handleConfirm = useCallback(() => {
    setRideState(RideState.CONFIRMING_PICKUP);
  }, [setRideState]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['40%', '100%']}
      onChange={handleSheetChanges}
      index={0}
      backgroundStyle={{ backgroundColor: Colors.lightBlack }}
      handleIndicatorStyle={styles.handleIndicatorStyle}
    >
      <BottomSheetView style={styles.bottomSheetContentContainer}>
        <View style={styles.bottomSheetHeaderContainer}>
          <CustomIcon
            name="arrow-back"
            size={24}
            color={Colors.textwhite}
            iconFamily="Ionicons"
            onPress={handleBackPress}
          />
          <Text style={styles.bottomSheetTitle}>
            {BookingScreenText.vehicleSelection}
          </Text>
          <View />
        </View>

        <View style={styles.destinationDivider} />

        <VehicleSelectionCard
          vehicleName="Auto"
          vehicleImage={IMAGE.autoImage}
          vehiclePrice="100"
          vehicleDropOffTime="10:00 AM"
          onPress={handleAuto}
          vehicleType={vehicleType}
          distance={distanceInfo?.distance}
          duration={formattedDuration}
          formattedTime={formattedTime}
        />

        <VehicleSelectionCard
          vehicleName="Car"
          vehicleImage={IMAGE.carImage}
          vehiclePrice="100"
          vehicleDropOffTime="10:00 AM"
          onPress={handleCar}
          vehicleType={vehicleType}
          distance={distanceInfo?.distance}
          duration={formattedDuration}
          formattedTime={formattedTime}
        />

        <CustomDropDown
          title={BookingScreenText.cash}
          textStyle={styles.dropDownCashTextStyle}
          styles={styles.dropDownMainContainer}
          onPress={() => {}}
          leftIcon={<Image source={IMAGE.cashImage} />}
          rightIcon={
            <CustomIcon
              name="arrow-forward-ios"
              size={24}
              color={Colors.textwhite}
              iconFamily="MaterialIcons"
            />
          }
        />

        <CustomButton
          buttonText={BookingScreenText.confirmDestionation + ' ' + vehicleType}
          buttonStyle={styles.movePinButton}
          buttonTextStyle={styles.movePinButtonText}
          onPress={handleConfirm}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

const VehicleSelectionCard = memo(
  ({
    vehicleName,
    vehicleImage,
    vehiclePrice,
    onPress,
    vehicleType,
    distance,
    duration,
    formattedTime,
  }: VehicleSelectionCardProps) => {
    return (
      <Pressable
        onPress={onPress}
        style={
          vehicleType === vehicleName
            ? styles.vehicleSelectionCardActive
            : styles.vehicleSelectionCard
        }
      >
        <Image source={vehicleImage} style={styles.vehicleImage} />
        <View style={styles.vehicleTextContainer}>
          <Text style={styles.vehicleName}>{vehicleName}</Text>
          {formattedTime && (
            <Text style={styles.vehicleDropOffTime}>{formattedTime}</Text>
          )}
          {distance && duration && (
            <Text style={styles.vehicleDropOffTime}>
              {distance} • {duration}
            </Text>
          )}
        </View>
        <Text style={styles.vehiclePrice}>₹ {vehiclePrice}</Text>
      </Pressable>
    );
  },
);
