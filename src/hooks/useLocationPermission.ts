import { useEffect, useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';

type PermissionStatus =
  | 'unavailable'
  | 'denied'
  | 'blocked'
  | 'granted'
  | 'limited';

const useLocationPermission = () => {
  const [permissionStatus, setPermissionStatus] =
    useState<PermissionStatus>('denied');

  const requestLocationPermission = async () => {
    try {
      let status: PermissionStatus = 'denied';

      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        ]);

        status =
          granted['android.permission.ACCESS_FINE_LOCATION'] ===
            PermissionsAndroid.RESULTS.GRANTED ||
          granted['android.permission.ACCESS_COARSE_LOCATION'] ===
            PermissionsAndroid.RESULTS.GRANTED
            ? 'granted'
            : 'denied';
      } else {
        const permission = Platform.select({
          default: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        });

        const result = await check(permission);

        if (result !== RESULTS.GRANTED) {
          const requestResult = await request(permission);
          status = requestResult as PermissionStatus;
        } else {
          status = 'granted';
        }
      }

      setPermissionStatus(status);
      return status === 'granted';
    } catch (err) {
      console.warn('Error requesting location permission:', err);
      return false;
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return { permissionStatus, requestLocationPermission };
};

export default useLocationPermission;
