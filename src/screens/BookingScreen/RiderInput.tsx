import { View, Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { CustomInput } from '../../components/CustomInput';
import { styles } from './styles';
import { BookingScreenProps, SearchedResultProps } from './types';
import { Colors } from '../../constants';
import { CustomIcon } from '../../components/CustomIcon';

const RiderInput = ({
  currentLocation,
  setCurrentLocation,
  destinationInput,
  handleDestinationInputChange,
  predictions,
  handlePredictionPress,
}: BookingScreenProps) => {
  return (
    <View>
      <View style={styles.riderInputSubMainContainer}>
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
        </View>
        <CustomIcon
          name="add-circle"
          size={32}
          color={Colors.textgray}
          iconFamily="Ionicons"
        />
      </View>
      {predictions.length > 0 && (
        <BottomSheetFlatList
          data={predictions}
          keyExtractor={item => item.place_id}
          renderItem={({ item }) => (
            <SearchedResult
              item={item}
              handlePredictionPress={handlePredictionPress}
            />
          )}
          scrollEnabled
          style={styles.predictionsContainer}
        />
      )}
    </View>
  );
};

const SearchedResult = memo(
  ({ item, handlePredictionPress }: SearchedResultProps) => {
    return (
      <TouchableOpacity
        style={styles.predictionRow}
        onPress={() => handlePredictionPress(item)}
      >
        <Text style={styles.predictionText}>{item.description}</Text>
      </TouchableOpacity>
    );
  },
);

export default memo(RiderInput);
