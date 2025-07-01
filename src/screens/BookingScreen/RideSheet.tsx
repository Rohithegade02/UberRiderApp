import React, { useCallback, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Colors } from '../../constants';
import { CustomIcon } from '../../components/CustomIcon';
import { CustomDropDown } from '../../components/CustomDropDown';
import { BookingScreenProps } from './types';
import RiderInput from './RiderInput';

const RideSheet = ({
  currentLocation,
  destinationLocation,
  setCurrentLocation,
  setDestinationLocation,
  handleBackPress,
  googleApiKey,
  destinationInput,
  handleDestinationInputChange,
  predictions,
  handlePredictionPress,
}: BookingScreenProps) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // state to track current snap point
  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    setCurrentSnapIndex(index);
  }, []);

  // Function to get title based on snap point
  const getTitle = () => {
    switch (currentSnapIndex) {
      case 0: // 30% snap point
        return 'Book a Ride ';
      case 1: // 100% snap point
        return 'Plan your Ride';
      default:
        return 'Plan your Ride';
    }
  };

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['30%', '100%']}
      onChange={handleSheetChanges}
      index={2}
      enablePanDownToClose={false}
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
          <Text style={styles.bottomSheetTitle}>{getTitle()}</Text>
          <View />
        </View>
        {currentSnapIndex === 0 && (
          <View>
            <Text>Quick booking options</Text>
            {/* Add your 30% content here */}
          </View>
        )}
        {currentSnapIndex === 2 && (
          <View style={styles.bottomSheet100Container}>
            <View style={styles.dropDownMainContainer}>
              <CustomDropDown
                title="Pickup Now"
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
                googleApiKey={googleApiKey}
                destinationInput={destinationInput}
                handleDestinationInputChange={handleDestinationInputChange}
                predictions={predictions}
                handlePredictionPress={handlePredictionPress}
              />
              <CustomIcon
                name="add-circle"
                size={32}
                color={Colors.textgray}
                iconFamily="Ionicons"
              />
            </View>
          </View>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default RideSheet;
