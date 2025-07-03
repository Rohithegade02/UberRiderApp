import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { BoldFont16, BoldFont20, Colors } from '../../../constants';
import { CustomButton } from '../../../components/CustomButton';

interface RideCompletedModalProps {
  visible: boolean;
  onDismiss: () => void;
}

const RideCompletedModal = ({
  visible,
  onDismiss,
}: RideCompletedModalProps) => {
  console.log('visible', onDismiss);

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
          <Text style={styles.modalTitle}>Ride completed</Text>
          <Text style={styles.modalSubtitle}>
            Please proceed to pay the fare and exit the vehicle.
          </Text>
          <CustomButton
            onPress={onDismiss}
            buttonText="Pay"
            buttonStyle={styles.modalButton}
            buttonTextStyle={styles.modalButtonText}
          />
        </View>
      </View>
    </Modal>
  );
};

export default RideCompletedModal;

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  modalContent: {
    backgroundColor: Colors.lightBlack,
    padding: 24,
    borderRadius: 12,
    width: '80%',
  },
  modalTitle: {
    ...BoldFont20,
    color: Colors.textwhite,
  },
  modalSubtitle: {
    ...BoldFont16,
    color: Colors.textwhite,
  },
  modalButton: {
    marginTop: 16,
  },
  modalButtonText: {
    ...BoldFont16,
    color: Colors.textwhite,
  },
});
