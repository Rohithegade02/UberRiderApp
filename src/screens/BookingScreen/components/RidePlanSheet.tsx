import { View } from 'react-native';
import { BookingScreenProps } from '../types';
import { CustomDropDown } from '../../../components/CustomDropDown';
import { CustomIcon } from '../../../components/CustomIcon';
import { Colors } from '../../../constants';
import { BookingScreenText } from '../constants';
import { styles } from '../styles';
import RiderInput from './RiderInput';

export const RidePlanSheet = ({
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
