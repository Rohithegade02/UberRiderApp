import React from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

// Account Presentational Screen
export const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AccountScreen</Text>
    </SafeAreaView>
  );
};
