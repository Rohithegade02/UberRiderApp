import { Image, Pressable, View } from 'react-native';
import { styles } from './styles';
import { CustomIcon } from '../../components/CustomIcon';
import { Colors, IMAGE } from '../../constants';
import { BookingScreenText } from './constants';
import {
  RideState,
  VehicleSelectionCardProps,
  VehicleSelectionSheetProps,
} from './types';
import { Text } from 'react-native';
import { CustomDropDown } from '../../components/CustomDropDown';
import { CustomButton } from '../../components/CustomButton';

export const VehicleSelectionSheet = ({
  handleBackPress,
  vehicleType,
  setVehicleType,
  bottomSheetRef,
  setRideState,
}: VehicleSelectionSheetProps) => {
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
        onPress={() => {
          setVehicleType('Auto');
          setRideState(RideState.CONFIRMING_PICKUP);
          bottomSheetRef.current?.close();
        }}
        vehicleType={vehicleType}
      />
      <VehicleSelectionCard
        vehicleName="Car"
        vehicleImage={IMAGE.carImage}
        vehiclePrice="100"
        vehicleDropOffTime="10:00 AM"
        onPress={() => {
          setVehicleType('Car');
          setRideState(RideState.CONFIRMING_PICKUP);
          bottomSheetRef.current?.close();
        }}
        vehicleType={vehicleType}
      />
      <View style={styles.destinationDivider} />
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
        onPress={() => {
          setRideState(RideState.CONFIRMING_PICKUP);
          bottomSheetRef.current?.close();
        }}
      />
    </View>
  );
};

const VehicleSelectionCard = ({
  vehicleName,
  vehicleImage,
  vehiclePrice,
  vehicleDropOffTime,
  onPress,
  vehicleType,
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
        <Text style={styles.vehicleDropOffTime}>{vehicleDropOffTime}</Text>
      </View>
      <Text style={styles.vehiclePrice}>₹ {vehiclePrice}</Text>
    </Pressable>
  );
};
