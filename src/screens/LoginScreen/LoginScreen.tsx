import React, { useEffect } from 'react';
import useLocationPermission from '../../hooks/useLocationPermission';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const LoginScreen = () => {
  const { permissionStatus } = useLocationPermission();

  useEffect(() => {
    // You can add additional logic here based on the permission status
    console.log('Location permission status:', permissionStatus);
  }, [permissionStatus]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Uber Rider</Text>
    </View>
  );
};
