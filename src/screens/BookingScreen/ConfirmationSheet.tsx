import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CustomIcon } from '../../components/CustomIcon';
import { Colors } from '../../constants';
import { BookingScreenText } from './constants';
import { ConfirmationSheetProps } from './types';
import { CustomButton } from '../../components/CustomButton';
import { CustomInput } from '../../components/CustomInput';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const ConfirmationSheet = ({
  handleBackPress,
  onConfirm,
  pickupAddress,
}: ConfirmationSheetProps) => {
  // reference for BottomSheet (not strictly needed but kept for consistency)
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['30%']}
      enablePanDownToClose={false}
      backgroundStyle={{ backgroundColor: Colors.lightBlack }}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      index={0}
    >
      <BottomSheetView style={styles.confirmationSheetContainer}>
        <View>
          <View style={[styles.bottomSheetHeaderContainer]}>
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
      </BottomSheetView>
    </BottomSheet>
  );
};

export default ConfirmationSheet;
