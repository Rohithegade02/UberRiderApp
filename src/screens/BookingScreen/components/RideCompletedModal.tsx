import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CustomButton } from '../../../components/CustomButton';
import { BookingScreenText } from '../constants';
import { RideCompletedModalProps } from '../types';
import { styles } from '../styles';

const RideCompletedModal = ({
  visible,
  onDismiss,
  handlePayAndSaveRide,
}: RideCompletedModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onDismiss}
      style={styles.modalWrapper}
    >
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {BookingScreenText.rideCompleted}
          </Text>
          <Text style={styles.modalSubtitle}>
            {BookingScreenText.rideCompletedSubtitle}
          </Text>
          <CustomButton
            onPress={handlePayAndSaveRide}
            buttonText={BookingScreenText.pay}
            buttonStyle={styles.modalButton}
            buttonTextStyle={styles.modalButtonText}
          />
        </View>
      </View>
    </Modal>
  );
};

export default RideCompletedModal;
