import { DestionationSelectionProps } from '../types';
import { View, Text } from 'react-native';
import { BookingScreenText } from '../constants';
import { CustomDropDown } from '../../../components/CustomDropDown';
import { CustomIcon } from '../../../components/CustomIcon';
import { Colors } from '../../../constants';
import { styles } from '../styles';
import { CustomButton } from '../../../components/CustomButton';

export const DestionationSelectionSheet = ({
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
