import React, { useEffect, useState } from 'react';
import { ActivityScreen } from './ActivityScreen';
import { getAllRides } from '../../services/firebaseFirestore';
import { getPlaceDetailsFromLatLng } from '../../services/routes';

// Activity Container Screen
export const ActivityScreenContainer = () => {
  const [rides, setRides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRides = async () => {
      setLoading(true);
      const result = await getAllRides();
      if (result.success) {
        const ridesWithAddresses = await Promise.all(
          (result.rides || []).map(async (ride: any) => {
            let pickupAddress = ride.pickup?.address;
            let dropAddress = ride.drop?.address;

            if (
              !pickupAddress &&
              ride.pickup?.latitude &&
              ride.pickup?.longitude
            ) {
              pickupAddress = await getPlaceDetailsFromLatLng(
                ride.pickup.latitude,
                ride.pickup.longitude,
              );
            }
            if (!dropAddress && ride.drop?.latitude && ride.drop?.longitude) {
              dropAddress = await getPlaceDetailsFromLatLng(
                ride.drop.latitude,
                ride.drop.longitude,
              );
            }
            console.log(pickupAddress, dropAddress);
            return {
              ...ride,
              pickup: { ...ride.pickup, address: pickupAddress.split(',')[1] },
              drop: { ...ride.drop, address: dropAddress.split(',')[1] },
            };
          }),
        );
        setRides(ridesWithAddresses);
      }
      setLoading(false);
    };
    fetchRides();
  }, []);

  return <ActivityScreen rides={rides} loading={loading} />;
};
