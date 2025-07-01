import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CustomIcon } from '../../components/CustomIcon';
import { Colors } from '../../constants';
import { BookingScreenText } from './constants';
import { ConfirmationSheetProps } from './types';
import { CustomButton } from '../../components/CustomButton';

const ConfirmationSheet = ({
  handleBackPress,
  onConfirm,
}: ConfirmationSheetProps) => {
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
          {BookingScreenText.confirmPickup}
        </Text>
        <View />
      </View>
      <View style={styles.destinationDivider} />
      <CustomButton
        buttonText={BookingScreenText.confirmPickup}
        buttonStyle={styles.movePinButton}
        buttonTextStyle={styles.movePinButtonText}
        onPress={onConfirm}
      />
    </View>
  );
};

export default ConfirmationSheet;
