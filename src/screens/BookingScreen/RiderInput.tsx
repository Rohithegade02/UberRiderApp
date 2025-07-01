import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CustomInput } from '../../components/CustomInput';
import { styles } from './styles';
import { BookingScreenProps } from './types';
import { Colors } from '../../constants';
import { CustomIcon } from '../../components/CustomIcon';

const RiderInput = ({
  currentLocation,
  // destinationLocation,
  setCurrentLocation,
  // setDestinationLocation,
  // googleApiKey,
  // New props for custom autocomplete
  destinationInput,
  handleDestinationInputChange,
  predictions,
  handlePredictionPress,
}: BookingScreenProps) => {
  return (
    <View style={styles.riderInputContainer}>
      <View style={styles.lineContainer}>
        <CustomIcon
          name="circle-o"
          size={24}
          color={Colors.textwhite}
          iconFamily="FontAwesome"
        />
        <View style={styles.line} />
        <CustomIcon
          name="circle-o"
          size={24}
          color={Colors.textwhite}
          iconFamily="FontAwesome"
        />
      </View>
      <View>
        <CustomInput
          textInputLabel="From ?"
          textInputPlaceholder="From ?"
          textInputValue={currentLocation!}
          textInputOnChangeText={setCurrentLocation}
          textInputStyle={styles.riderInput}
          textInputKeyboardType="default"
          placeholderTextStyle={Colors.textwhite as any}
          textInputMaxLength={100}
        />
        <CustomInput
          textInputLabel="Where to?"
          textInputPlaceholder="Where to?"
          textInputValue={destinationInput}
          textInputOnChangeText={handleDestinationInputChange}
          textInputStyle={styles.riderInput}
          textInputKeyboardType="default"
          placeholderTextStyle={Colors.textwhite as any}
          textInputMaxLength={100}
        />
      </View>
      {predictions.length > 0 && (
        <FlatList
          data={predictions}
          keyExtractor={item => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.predictionRow}
              onPress={() => handlePredictionPress(item)}
            >
              <Text style={styles.predictionText}>{item.description}</Text>
            </TouchableOpacity>
          )}
          style={styles.predictionsContainer}
        />
      )}
    </View>
  );
};

export default RiderInput;
