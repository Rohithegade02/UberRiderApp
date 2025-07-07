import { ServiceScreen } from './ServiceScreen';
import { useBookingStore } from '../../store/useBookingStore';
import { useCallback, useMemo } from 'react';
import { IMAGE } from '../../constants';

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

  const servicePromoCardData = useMemo(
    () => [
      {
        title: 'Ride',
        image: IMAGE.carImage,
        promo: true,
      },
      {
        title: 'Auto',
        image: IMAGE.autoImage,
        promo: false,
      },
    ],
    [],
  );
  return (
    <ServiceScreen
      handleVehicleType={handleVehicleType}
      servicePromoCardData={servicePromoCardData}
    />
  );
};
