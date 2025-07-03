import { Image, Pressable, View } from 'react-native';
import { styles } from '../styles';
import { CustomIcon } from '../../../components/CustomIcon';
import { Colors, IMAGE } from '../../../constants';
import { BookingScreenText } from '../constants';
import {
  RideState,
  VehicleSelectionCardProps,
  VehicleSelectionSheetProps,
} from '../types';
import { Text } from 'react-native';
import { CustomDropDown } from '../../../components/CustomDropDown';
import { CustomButton } from '../../../components/CustomButton';
import { memo, useCallback } from 'react';
import { useArrivalTime } from '../../../hooks/useArrivalTime';

export const VehicleSelectionSheet = ({
  handleBackPress,
  vehicleType,
  setVehicleType,
  bottomSheetRef,
  setRideState,
  distanceInfo,
}: VehicleSelectionSheetProps) => {
  const { formattedTime, formattedDuration } = useArrivalTime(
    distanceInfo?.duration,
  );

  const handleCar = useCallback(() => {
    setVehicleType('Car');
    setRideState(RideState.CONFIRMING_PICKUP);
    bottomSheetRef?.current?.close();
  }, [bottomSheetRef, setRideState, setVehicleType]);

  const handleAuto = useCallback(() => {
    setVehicleType('Auto');
    setRideState(RideState.CONFIRMING_PICKUP);
    bottomSheetRef?.current?.close();
  }, [bottomSheetRef, setRideState, setVehicleType]);

  const handleConfirm = useCallback(() => {
    setRideState(RideState.CONFIRMING_PICKUP);
    bottomSheetRef?.current?.close();
  }, [bottomSheetRef, setRideState]);

  return (
    <View>
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
    </View>
  );
};

const VehicleSelectionCard = memo(
  ({
    vehicleName,
    vehicleImage,
    vehiclePrice,
    // vehicleDropOffTime,
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
          <Text style={styles.vehicleDropOffTime}>{formattedTime}</Text>
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
