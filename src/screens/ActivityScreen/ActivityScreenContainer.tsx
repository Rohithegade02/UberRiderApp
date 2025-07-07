import React, { useEffect, useState } from 'react';
import { ActivityScreen } from './ActivityScreen';
import { getAllRides } from '../../services/firebaseFirestore';
import { fetchGeocode } from '../../services/routes';

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
              pickupAddress = await fetchGeocode(
                ride.pickup.latitude,
                ride.pickup.longitude,
              );
              console.log(pickupAddress.results[0].formatted_address);
            }
            if (!dropAddress && ride.drop?.latitude && ride.drop?.longitude) {
              dropAddress = await fetchGeocode(
                ride.drop.latitude,
                ride.drop.longitude,
              );
            }
            console.log(pickupAddress, dropAddress);
            return {
              ...ride,
              pickup: {
                ...ride.pickup,
                address:
                  pickupAddress?.results[0].formatted_address.split(',')[1],
              },
              drop: {
                ...ride.drop,
                address:
                  dropAddress?.results[0].formatted_address.split(',')[1],
              },
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
