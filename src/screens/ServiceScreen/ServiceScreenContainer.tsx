import { ServiceScreen } from './ServiceScreen';
import { useBookingStore } from '../../store/useBookingStore';
import { useCallback } from 'react';

//ServiceScreen Container
export const ServiceScreenContainer = () => {
  const { setVehicleType } = useBookingStore();

  //handle vehicle type
  const handleVehicleType = useCallback(
    (vehicleType: string) => {
      setVehicleType(vehicleType);
    },
    [setVehicleType],
  );
  return <ServiceScreen handleVehicleType={handleVehicleType} />;
};
