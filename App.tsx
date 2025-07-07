import React, { useEffect } from 'react';
import Navigation from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import useLocationPermission from './src/hooks/useLocationPermission';
import { StatusBar } from 'react-native';
const App = () => {
  //check the location permission
  const { permissionStatus, requestLocationPermission } =
    useLocationPermission();

  useEffect(() => {
    requestLocationPermission();
  }, [requestLocationPermission]);

  if (!permissionStatus) {
    return null;
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Navigation />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
