import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Colors } from '../../constants';
import { CustomButton } from '../../components/CustomButton';

interface RideCompletedModalProps {
  visible: boolean;
  onDismiss: () => void;
}

const RideCompletedModal = ({
  visible,
  onDismiss,
}: RideCompletedModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Ride completed</Text>
          <Text style={styles.modalSubtitle}>
            Please proceed to pay the fare and exit the vehicle.
          </Text>
          <CustomButton label="Dismiss" onPress={onDismiss} />
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
  },
  modalContent: {
    backgroundColor: Colors.lightBlack,
    padding: 24,
    borderRadius: 12,
    width: '80%',
  },
  modalTitle: {
    color: Colors.textwhite,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalSubtitle: {
    color: Colors.textwhite,
    marginBottom: 16,
    textAlign: 'center',
  },
});
